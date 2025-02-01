import { Injectable } from '@nestjs/common';
import { Training } from '@prisma/client';
import { CreateTrainingDto } from 'src/domain/model/training/create-training.dto';
import { TrainingRepositoryImpl } from 'src/infrastructure/repositories/training/training.repository';

@Injectable()
export class TrainingService {
  constructor(private trainingRepository: TrainingRepositoryImpl) {}

  async save(createTrainingDto: CreateTrainingDto): Promise<Training> {
    const prismaTraining = await this.trainingRepository.save({
      name: createTrainingDto.name,
      plan: {
        connect: {
          id: createTrainingDto.planId,
        },
      },
    });
    return prismaTraining;
  }
  async getTrainings(): Promise<Training[]> {
    const trainings = await this.trainingRepository.getTrainings();
    return trainings;
  }
  async getTrainingById(id: string): Promise<Training> {
    const training = await this.trainingRepository.getTrainingById(+id);
    return training;
  }
}
