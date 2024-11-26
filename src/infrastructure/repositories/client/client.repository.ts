import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, Client, PrismaClient } from "@prisma/client";
import { ClientRepository } from "src/domain/repositories/client/client.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class ClientRepositoryImpl implements ClientRepository {

    constructor(private prisma: PrismaService){}

    async save(data: Prisma.ClientCreateInput): Promise<Client> {
        const prismaClient = await this.prisma.client.create({ data });
        return prismaClient;
    }
    async getClients(): Promise<Client[]> {
        const prismaClients = await this.prisma.client.findMany({ include: { payments: true } });
        return prismaClients;
    }
    async getClientById(id: number): Promise<Client> {
        const prismaClient = await this.prisma.client.findUnique({ where: { id }, include: { payments: true } });
        if(!prismaClient) throw new HttpException('Client not found', 404);
        return prismaClient;
    }
    
}