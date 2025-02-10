import { Injectable } from '@nestjs/common';
import { ClientService } from '../services/client/client.service';
import { TrainerService } from '../services/trainer/trainer.service';

@Injectable()
export class AssignTrainerUseCase {
  constructor(
    private readonly clientService: ClientService,
    private readonly trainerService: TrainerService,
  ) {}

  async execute({ clientId }: { clientId: number }) {
    const trainers = await this.trainerService.getTrainers();

    let selectedTrainer = trainers[0] as any;

    trainers.forEach((trainer: any) => {
      if (trainer.clients.length < selectedTrainer.clients.length) {
        selectedTrainer = trainer;
      }
    });

    const client = this.clientService.update(clientId, {
      trainer: { connect: { id: selectedTrainer.id } },
    });

    return client;
  }
}
