import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, Trainer } from "@prisma/client";
import { TrainerRepository } from "src/domain/repositories/trainer/trainer.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class TrainerRepositoryImpl implements TrainerRepository {
    
    constructor(private prisma: PrismaService) {}
    
    async save(data: Prisma.TrainerCreateInput): Promise<Trainer> {
        const newTrainer = await this.prisma.trainer.create({ data, include: { certificates: true } });
        return newTrainer
    }
    async getTrainers(): Promise<Trainer[]> {
        const trainers = await this.prisma.trainer.findMany({ include: { certificates: true, clients: true } });
        return trainers;
    }
    async getTrainerById(id: number): Promise<Trainer> {
        const trainer = await this.prisma.trainer.findUnique({ where: { id }, include: { certificates: true, clients: true } });
        if(!trainer) throw new HttpException('trainer not found', 404);
        return trainer;
    }

}