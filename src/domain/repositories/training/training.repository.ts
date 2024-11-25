import { Prisma, Training } from "@prisma/client";

export interface TrainingRepository {
    save(data: Prisma.TrainingCreateInput): Promise<Training>
    getTrainings(): Promise<Training[]>
    getTrainingById(id: number): Promise<Training>
}