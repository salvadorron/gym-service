import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, Training } from "@prisma/client"
import { TrainingRepository } from "src/domain/repositories/training/training.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class TrainingRepositoryImpl implements TrainingRepository {
    constructor(private prisma: PrismaService) {}
    async save(data: Prisma.TrainingCreateInput): Promise<Training> {
        const prismaTraining = await this.prisma.training.create({ data });
        return prismaTraining;
    }
    async getTrainings(): Promise<Training[]> {
        const trainings = await this.prisma.training.findMany({ include: { plan: true, excersises: true } });
        return trainings;
    }
    async getTrainingById(id: number): Promise<Training> {
        const training = await this.prisma.training.findFirst({ where: { id }, include: { plan: true, excersises: true } });
        if(!training) throw new HttpException('Training not found', 404);
        return training
    }
    

}