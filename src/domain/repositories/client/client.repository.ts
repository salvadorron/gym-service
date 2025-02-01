import { Client, Prisma } from '@prisma/client';

export interface ClientRepository {
  save(data: Prisma.ClientCreateInput): Promise<Client>;
  update(id: number, data: Prisma.ClientUpdateInput): Promise<Client>;
  getClients(): Promise<Client[]>;
  getClientById(id: number): Promise<
    Prisma.ClientGetPayload<{
      include: {
        payments: true;
        plan: {
          include: {
            trainings: {
              include: {
                excersises: true;
                schedule: { include: { days: true } };
              };
            };
          };
        };
      };
    }>
  >;
  assignMembership(
    id: number,
    planId: number,
    payment: { method: string; description: string; amount: number },
  ): Promise<Client>;
}
