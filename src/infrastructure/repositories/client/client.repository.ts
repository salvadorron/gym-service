import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, Client } from "@prisma/client";
import { ClientRepository } from "src/domain/repositories/client/client.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class ClientRepositoryImpl implements ClientRepository {

    constructor(private prisma: PrismaService){}
    
    async assignMembership(id: number, planId: number): Promise<Client> {
        const client = await this.prisma.client.update({ data: { plans: { connect: { id: planId } } }, where: { id } })
        return client;
    }

    async save(data: Prisma.ClientCreateInput): Promise<Client> {
        const prismaClient = await this.prisma.client.create({ data });
        return prismaClient;
    }

    async update(id: number, data: Prisma.ClientUpdateInput): Promise<Client> {
        const prismaClient = await this.prisma.client.update({ where: { id }, data });
        return prismaClient
    }

    async getClients(): Promise<Client[]> {
        const prismaClients = await this.prisma.client.findMany({ include: { payments: true, plans: { include: { trainings: { include: { excersises: true } } } } } });
        return prismaClients;
    }
    async getClientById(id: number): Promise<Client> {
        const prismaClient = await this.prisma.client.findUnique({ where: { id }, include: { payments: true, plans: { include: { trainings: { include: { excersises: true } } } } } });
        if(!prismaClient) throw new HttpException('Client not found', 404);
        return prismaClient;
    }
    
}