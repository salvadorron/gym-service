import { User } from "@prisma/client";

export class UserEntity {

    private id: number;
    private name: string;
    private lastName: string;
    private age: number;
    private username: string;
    private password: string;
    private roleId: number;

    constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.lastName = user.last_name;
        this.age = user.age;
        this.username = user.username;
        this.password = user.password;
        this.roleId = user.role_id
    }

    getId(): number {
        return this.id;
    }

    toSnapshot(): UserEntityDto {
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            age: this.age,
            username: this.username,
            roleId: this.roleId,
        }
    }

}

type UserEntityDto = {
    id: number,
    name: string,
    lastName: string,
    age: number,
    username: string,
    roleId: number
}