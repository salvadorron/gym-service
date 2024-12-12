import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientService } from '../services/client/client.service';
import { CreateClientDto } from 'src/domain/model/client/create-client.dto';
import { RegisterUserClientUseCase } from '../usecases/register-user.usecase';
import { RegisterUserClientDto } from 'src/domain/model/client/register-userclient.dto';

@Controller('client')
export class ClientController {

    constructor(
        private readonly clientService: ClientService,
        private readonly registerClientUsecase: RegisterUserClientUseCase
    ){}


       
    @Post()
    async create(@Body() createClientDto: CreateClientDto) {
        const newClient = await this.clientService.save(createClientDto);
        return newClient
    }

    @Post('register')
    async registerUserClient(@Body() registerUserClientDto: RegisterUserClientDto) {
        const newUserClient = await this.registerClientUsecase.execute(registerUserClientDto);
        return newUserClient.toSnapshot();
    }

    @Get()
    async findAll() {
        const clients = await this.clientService.getClients();
        return clients
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const client = await this.clientService.getClientById(id);
        return client;
    }

    @Patch('assign-membership')
    async assignMembership(@Body() { id, planId }: { id: number, planId: number }) {
        const client = await this.clientService.assignMembership(id, planId);
        return client;
    }

    

}
