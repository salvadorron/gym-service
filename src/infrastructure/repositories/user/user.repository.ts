import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
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
  async getUserById(id: string): Promise<UserEntity> {
    const prismaUser = await this.prisma.user.findFirst({
      where: { id: +id },
      include: {
        client: { include: { payments: true, plan: true } },
        trainer: true,
        admin: true,
      },
    });
    if (!prismaUser) throw new HttpException('User not found', 404);
    return UserBuilder.build(prismaUser);
  }
  async getUserByUsername(username: string): Promise<UserEntity> {
    const prismaUser = await this.prisma.user.findFirst({
      where: { username: username },
      include: {
        client: { include: { payments: true, plan: true } },
        trainer: true,
        admin: true,
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
    });
    return user;
  }

  async getUsers(trainerId?: number): Promise<UserEntity[]> {
    const where: Prisma.UserWhereInput = {};

    if (trainerId) {
      Object.assign(where, {
        role_id: 'client',
        client: {
          trainer_id: trainerId,
        },
      });
    }

    const prismaUsers = await this.prisma.user.findMany({
      include: {
        client: { include: { payments: true, plan: true } },
        trainer: true,
        admin: true,
      },
      where,
    });

    const users = prismaUsers.map((users) => UserBuilder.build(users));
    return users;
  }
}
