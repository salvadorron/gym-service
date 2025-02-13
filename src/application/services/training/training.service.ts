import { Injectable } from "@nestjs/common";
import { Prisma, Training } from "@prisma/client"
import { TrainingRepositoryImpl } from "../../../infrastructure/repositories/training/training.repository";

@Injectable()
export class TrainingService {
    constructor(private trainingRepository: TrainingRepositoryImpl) {}
    
    async save(data: Prisma.TrainingCreateInput): Promise<Training> {
        const prismaTraining = await this.trainingRepository.save(data);
        return prismaTraining;
    }


    async getTrainings(): Promise<Training[]> {
        const trainings = await this.trainingRepository.getTrainings();
        return trainings;
    }
    async getTrainingById(id: string): Promise<Training> {
        const training = await this.trainingRepository.getTrainingById(+id);
        return training
    }
    

}