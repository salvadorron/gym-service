import { Prisma, Trainer } from '@prisma/client';

export interface TrainerRepository {
  save(data: Prisma.TrainerCreateInput): Promise<Trainer>;
  getTrainers(): Promise<Trainer[]>;
  getTrainerById(id: number): Promise<Trainer>;
}
