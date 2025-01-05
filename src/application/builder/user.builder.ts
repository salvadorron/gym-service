import { User } from "@prisma/client";
import { UserEntity } from "../../domain/model/user/user.entity";

export class UserBuilder {

    static build(user: User): UserEntity {
        return new UserEntity(user);
    }

}