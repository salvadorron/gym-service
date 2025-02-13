import { Injectable } from "@nestjs/common";
import { Excersise, Prisma } from "@prisma/client"
import { CreateExcersiseDto } from "../../../domain/model/excersise/create-excercise.dto";
import { ExcersiseRepositoryImpl } from "src/infrastructure/repositories/excercise/excersise.repository";

@Injectable()
export class ExcersiseService {
    constructor(private excersiseRepository: ExcersiseRepositoryImpl) {}
    
    async save(createExcersiseDto: CreateExcersiseDto): Promise<Excersise> {
        const prismaExcersise = await this.excersiseRepository.save({
            name: createExcersiseDto.name,
            description: createExcersiseDto.description,
            difficulty: createExcersiseDto.difficulty,
            equipment: createExcersiseDto.equipment,
            muscleGroup: createExcersiseDto.muscleGroup,
            type: createExcersiseDto.type
        });
        return prismaExcersise;
    }

    async update(exercise: Excersise): Promise<Excersise> {
        const {
            id,
            description,
            difficulty,
            distance,
            duration,
            equipment,
            intensity,
            muscleGroup,
            name,
            notes,
            reps,
            sets,
            type,
            weight
        } = exercise;
        const prismaExcercise = await this.excersiseRepository.update(
            {
                description,
                difficulty,
                distance,
                duration,
                equipment,
                intensity,
                muscleGroup,
                name,
                notes,
                reps,
                sets,
                type,
                weight
            }, +id);
        return prismaExcercise;
    }

    async getExcersises(): Promise<Excersise[]> {
        const prismaExcersises = await this.excersiseRepository.getExcersises();
        return prismaExcersises;
    }
    async getExcersiseById(id: string): Promise<Excersise> {
        const prismaExcersise = await this.excersiseRepository.getExcersiseById(+id);
        return prismaExcersise;
    }
    


}