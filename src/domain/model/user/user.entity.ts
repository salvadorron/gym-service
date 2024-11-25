import { Admin, Client, Trainer, User } from "@prisma/client";

export class UserEntity {

    private id: number;
    private name: string;
    private lastName: string;
    private age: number;
    private username: string;
    private password: string;
    private roleId: number;
    private client?: Client
    private trainer?: Trainer
    private admin?: Admin

    constructor(user: User & { client?: Client, trainer?: Trainer, admin?: Admin }) {
        this.id = user.id;
        this.name = user.name;
        this.lastName = user.last_name;
        this.age = user.age;
        this.username = user.username;
        this.password = user.password;
        this.roleId = user.role_id;
        this.client = user.client ? user.client : undefined;
        this.trainer = user.trainer ? user.trainer : undefined;
        this.admin = user.admin ? user.admin : undefined;
    }

    getId(): number {
        return this.id;
    }

    getHashedPassword(): string {
        return this.password
    }

    toSnapshot(): UserEntityDto {
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            age: this.age,
            username: this.username,
            roleId: this.roleId,
            client: this.client,
            trainer: this.trainer,
            admin: this.admin
        }
    }

}

type UserEntityDto = {
    id: number,
    name: string,
    lastName: string,
    age: number,
    username: string,
    roleId: number,
    client?: Client
    trainer?: Trainer
    admin?: Admin
}