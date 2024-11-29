import { Injectable } from "@nestjs/common";
import { UserService } from "../services/user/user.service";
import { ClientService } from "../services/client/client.service";
import { RegisterUserClientDto } from "src/domain/model/client/register-userclient.dto";

@Injectable()
export class RegisterUserClientUseCase {
     
    constructor(
        private readonly userService: UserService,
        private readonly clientService: ClientService
    ){}

    async execute({ username, password, age, last_name, name }: RegisterUserClientDto) {
        const user = await this.userService.save({ username, password, age, last_name, name, role: { connectOrCreate: { where: { id: 'client' }, create: { id: 'client', name: 'Cliente' } } } });
        await this.clientService.save({ trainingProgress: 0, userId: user.getId()})
        return user
    }
}