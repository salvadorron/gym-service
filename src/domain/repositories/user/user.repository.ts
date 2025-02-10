import { Prisma } from '@prisma/client';
import { UserEntity } from '../../../domain/model/user/user.entity';

export interface UserRepository {
  save(data: Prisma.UserCreateInput): Promise<UserEntity>;
  getUsers(trainerId?: number): Promise<UserEntity[]>;
  getUserById(id: string): Promise<UserEntity>;
  getUserByUsername(username: string): Promise<UserEntity>;
}
