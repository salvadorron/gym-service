import { HttpException, Injectable } from "@nestjs/common";
import { Client, Prisma } from "@prisma/client";
import { CreateClientDto } from "src/domain/model/client/create-client.dto";
import { ClientRepositoryImpl } from "src/infrastructure/repositories/client/client.repository";
import { UserRepositoryImpl } from "src/infrastructure/repositories/user/user.repository";
import { UserService } from "../user/user.service";

@Injectable()
export class ClientService {
    constructor(
        private clientRepository: ClientRepositoryImpl,
        private userService: UserService
    ) {}


    async save(data: CreateClientDto): Promise<Client> {
        const user = await this.userService.getUserById(data.userId);
        if(!user) throw new HttpException('User not found', 404);
        return this.clientRepository.save({ training_progress: data.trainingProgress, user: { connect: { id: +data.userId } } }); 
    }

    async getClients(): Promise<Client[]> {
        return this.clientRepository.getClients();
    }

    async getClientById(id: string): Promise<Client> {
        return this.clientRepository.getClientById(+id);
    } 

}