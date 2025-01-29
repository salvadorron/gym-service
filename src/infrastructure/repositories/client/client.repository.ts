import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, Client } from "@prisma/client";
import { ClientRepository } from "../../../domain/repositories/client/client.repository";
import { PrismaService } from "../../../infrastructure/services/prisma/prisma.service";

@Injectable()
export class ClientRepositoryImpl implements ClientRepository {

    constructor(private prisma: PrismaService){}
    
    async assignMembership(id: number, planId: number, payment: { method: string, description: string, amount: number }): Promise<Client> {
        const client = await this.prisma.client.update({ data: { plan: { connect: { id: planId } }, payments: {
            create: {
                date: new Date(),
                method: payment.method,
                description: payment.description,
                amount: payment.amount
            }
        } }, where: { id } })
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
        const prismaClients = await this.prisma.client.findMany({ include: { payments: true, plan: { include: { trainings: { include: { excersises: true, schedule: { include: { days: true } } } } } } } });
        return prismaClients;
    }
    async getClientById(id: number): Promise<Prisma.ClientGetPayload<{include: { payments: true, plan: { include: { trainings: { include: { excersises: true, schedule: { include: { days: true } } } } } } }}>> {
        const prismaClient = await this.prisma.client.findUnique({ where: { id }, include: { payments: true, plan: { include: { trainings: { include: { excersises: true, schedule: { include: { days: true } } } } } } } });
        if(!prismaClient) throw new HttpException('Client not found', 404);
        return prismaClient;
    }
    
}