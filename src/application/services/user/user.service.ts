import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserEntity } from '../../../domain/model/user/user.entity';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepositoryImpl) {}

  async save(data: Prisma.UserCreateInput) {
    return this.userRepository.save(data);
  }

  async update(data: Prisma.UserUpdateInput, id: number) {
    return this.userRepository.update(data, id);
  }

  async getUsers(params?: { trainerId?: number, roleId?: string}): Promise<UserEntity[]> {
    return this.userRepository.getUsers(params);
  }

  async delete(id: number): Promise<User>{
    return this.userRepository.delete(id);
  }

  async getUserById(id: string): Promise<UserEntity> {
    return this.userRepository.getUserById(id);
  }
  async getUserByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.getUserByUsername(username);
  }
}
