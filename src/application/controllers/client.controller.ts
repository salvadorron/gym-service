import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from '../services/client/client.service';
import { CreateClientDto } from 'src/domain/model/client/create-client.dto';

@Controller('client')
export class ClientController {

    constructor(private readonly clientService: ClientService){}


    @Post()
    async create(@Body() createClientDto: CreateClientDto) {
        const newClient = await this.clientService.save(createClientDto);
        return newClient
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

    

}
