import { Client, Prisma } from "@prisma/client"

export interface ClientRepository {
    save(data: Prisma.ClientCreateInput): Promise<Client>
    getClients(): Promise<Client[]>
    getClientById(id: number): Promise<Client>
}