import { Prisma, User } from '@prisma/client';
import { UserEntity } from '../../../domain/model/user/user.entity';

export interface UserRepository {
  save(data: Prisma.UserCreateInput): Promise<UserEntity>;
  update(data: Prisma.UserUpdateInput, id: number): Promise<UserEntity>;
  getUsers(params?: { trainerId?: number, roleId?: string}): Promise<UserEntity[]>;
  getUserById(id: string): Promise<UserEntity>;
  getUserByUsername(username: string): Promise<UserEntity>;
  delete(id: number): Promise<User>
}
