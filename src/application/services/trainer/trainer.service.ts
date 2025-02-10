import { HttpException, Injectable } from '@nestjs/common';
import { Trainer } from '@prisma/client';
import { UserService } from '../user/user.service';
import { TrainerRepositoryImpl } from 'src/infrastructure/repositories/trainer/trainer.repository';
import { CreateTrainerDto } from 'src/domain/model/trainer/create-trainer.dto';

@Injectable()
export class TrainerService {
  constructor(
    private trainerRepository: TrainerRepositoryImpl,
    private userService: UserService,
  ) {}

  async save(data: CreateTrainerDto): Promise<Trainer> {
    const user = await this.userService.getUserById(data.userId.toString());
    if (!user) throw new HttpException('User not found', 404);
    return this.trainerRepository.save({
      speciality: data.speciality,
      certificates: {
        create: data.certificates.map((item) => ({ name: item })),
      },
      user: { connect: { id: data.userId } },
    });
  }

  async getTrainers(): Promise<Trainer[]> {
    return this.trainerRepository.getTrainers();
  }

  async getTrainerById(id: string): Promise<Trainer> {
    return this.trainerRepository.getTrainerById(+id);
  }
}
