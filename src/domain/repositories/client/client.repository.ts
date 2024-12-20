import { Client, Prisma } from "@prisma/client"

export interface ClientRepository {
    save(data: Prisma.ClientCreateInput): Promise<Client>
    update(id: number, data: Prisma.ClientUpdateInput): Promise<Client>
    getClients(): Promise<Client[]>
    getClientById(id: number): Promise<Client>
    assignMembership(id: number, planId: number): Promise<Client>
}