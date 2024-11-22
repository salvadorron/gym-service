import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserEntity } from 'src/domain/model/user/user.entity';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user/user.repository';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepositoryImpl){}

    async save(data: Prisma.UserCreateInput){
        return this.userRepository.save(data);
    }

    async getUsers(): Promise<UserEntity[]> {
        return this.userRepository.getUsers();
    }

    async getUserById(id: string): Promise<UserEntity> {
        return this.userRepository.getUserById(id);
    }
    async getUserByUsername(username: string): Promise<UserEntity> {
        return this.userRepository.getUserByUsername(username);
    }
}
