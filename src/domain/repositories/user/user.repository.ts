import { Prisma, User } from "@prisma/client";
import { UserEntity } from "../../../domain/model/user/user.entity";

export interface UserRepository {
    save(data: Prisma.UserCreateInput): Promise<UserEntity>,
    getUsers(): Promise<UserEntity[]>
    getUserById(id: string): Promise<UserEntity>
    getUserByUsername(username: string): Promise<UserEntity>
}