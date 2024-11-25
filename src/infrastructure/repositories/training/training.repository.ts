import { Injectable } from "@nestjs/common";
import { Prisma, Training } from "@prisma/client"
import { TrainingRepository } from "src/domain/repositories/training/training.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class TrainingRepositoryImpl implements TrainingRepository {
    constructor(private prisma: PrismaService) {}
    save(data: Prisma.TrainingCreateInput): Promise<Training> {
        throw new Error("Method not implemented.");
    }
    getTrainings(): Promise<Training[]> {
        throw new Error("Method not implemented.");
    }
    getTrainingById(id: number): Promise<Training> {
        throw new Error("Method not implemented.");
    }
    

}