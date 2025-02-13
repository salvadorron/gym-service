import { HttpException, Injectable } from '@nestjs/common';
import { Client, Prisma } from '@prisma/client';
import { CreateClientDto } from 'src/domain/model/client/create-client.dto';
import { ClientRepositoryImpl } from 'src/infrastructure/repositories/client/client.repository';
import { UserService } from '../user/user.service';
import PdfJsService from 'src/infrastructure/services/pdf/pdf.service';

@Injectable()
export class ClientService {
  constructor(
    private clientRepository: ClientRepositoryImpl,
    private userService: UserService,
    private pdfService: PdfJsService,
  ) {}

  async save(data: CreateClientDto): Promise<Client> {
    const user = await this.userService.getUserById(data.userId.toString());
    if (!user) throw new HttpException('User not found', 404);
    return this.clientRepository.save({
      training_progress: data.trainingProgress,
      user: { connect: { id: +data.userId } },
    });
  }

  async update(id: number, data: Prisma.ClientUpdateInput): Promise<Client> {
    return this.clientRepository.update(id, data);
  }

  async getClients(): Promise<Client[]> {
    return this.clientRepository.getClients();
  }

  async getClientById(id: string): Promise<Client> {
    return this.clientRepository.getClientById(+id);
  }

  async assignMembership(
    id: number,
    membershipId: number,
    payment: { method: string; description: string; amount: number, startDate: Date, endDate: Date, status: string },
  ): Promise<Client> {
    return this.clientRepository.assignMembership(id, membershipId, payment);
  }

  async generateSchedulePDF(clientId: number): Promise<Buffer> {
    const client = await this.clientRepository.getClientById(clientId);
    if (!client) throw new Error('Client not found');
    const user = await this.userService.getUserById(client.user_id.toString());
    if (!user) throw new Error('User not found');
    const userDto = user.toSnapshot();
    const owner = `${userDto.name} ${userDto.lastName}`;
    return this.pdfService.buildSchedule({
      trainings: client.plan.trainings,
      owner,
    });
  }
}
