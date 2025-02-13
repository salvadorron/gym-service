import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserBuilder } from '../../../application/builder/user.builder';
import { UserEntity } from '../../../domain/model/user/user.entity';
import { UserRepository } from '../../../domain/repositories/user/user.repository';
import { BcryptService } from '../../../infrastructure/services/bcrypt/bcrypt.service';
import { PrismaService } from '../../../infrastructure/services/prisma/prisma.service';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    private prisma: PrismaService,
    private bcrypt: BcryptService,
  ) {}
  async delete(id: number): Promise<User> {
    const deletedUser = await this.prisma.user.delete({ where: { id }})
    return deletedUser
  }
  async update(data: Prisma.UserUpdateInput, id: number): Promise<UserEntity> {
      const hashedPassword = await this.bcrypt.hash(data.password.toString())
      const prismaUser = await this.prisma.user.update({
        data: {
          ...data,
          password: hashedPassword
        },
        where: { id }
      })

      const user = UserBuilder.build(prismaUser);
      return user
  }
  async getUserById(id: string): Promise<UserEntity> {
    const prismaUser = await this.prisma.user.findFirst({
      where: { id: +id },
      include: {
        client: { include: { payments: true, plan: true,  } },
        trainer: true,
        admin: true,
        state: true,
        municipality: true,
        parrish: true
      },
    });
    if (!prismaUser) throw new HttpException('User not found', 404);
    return UserBuilder.build(prismaUser);
  }
  async getUserByUsername(username: string): Promise<UserEntity> {
    const prismaUser = await this.prisma.user.findFirst({
      where: { username: username },
      include: {
        client: { include: { payments: true, plan: true, trainer: true } },
        trainer: true,
        admin: true,
        municipality: true,
        state: true, 
        parrish: true
      },
    });
    if (!prismaUser) throw new HttpException('User not found', 404);
    return UserBuilder.build(prismaUser);
  }

  async save(data: Prisma.UserCreateInput): Promise<UserEntity> {
    const hashedPassword = await this.bcrypt.hash(data.password);
    const prismaUser = await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
    const user = UserBuilder.build({
      id: prismaUser.id,
      username: prismaUser.username,
      age: prismaUser.age,
      last_name: prismaUser.last_name,
      name: prismaUser.name,
      role_id: prismaUser.role_id,
      password: prismaUser.password,
      gender: prismaUser.gender,
      medical_conditions: prismaUser.medical_conditions,
      state_id: prismaUser.state_id,
      municipality_id: prismaUser.municipality_id,
      parrish_id: prismaUser.parrish_id,
      city: prismaUser.city,
      zip_code: prismaUser.zip_code,
      address: prismaUser.address,
      weight: prismaUser.weight,
      height: prismaUser.height,
      nutritional_plan_id: undefined
    });
    return user;
  }

  async getUsers(params?: { trainerId?: number, roleId?: string }): Promise<UserEntity[]> {
    const where: Prisma.UserWhereInput = {};

    if(params){
      if(params.trainerId) {
        Object.assign(where, {
          client: {
            trainer_id: +params.trainerId
          }
        })

      }

      if(params.roleId){
        Object.assign(where, {
          role_id: params.roleId
        })
      }
    }

    const prismaUsers = await this.prisma.user.findMany({
      include: {
        client: { include: { payments: true, plan: true, trainer: {include: {user: true}} } },
        trainer: true,
        admin: true, 
        nutritional_plan: true,
        state: true,
        parrish: true,
        municipality: true
      },
      where,
    });

    const users = prismaUsers.map((users) => UserBuilder.build(users));
    return users;
  }
}
