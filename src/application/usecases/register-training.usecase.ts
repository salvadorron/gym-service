import { Injectable } from "@nestjs/common";
import { ExcersiseService } from "../services/excercise/excersise.service";
import { TrainingService } from "../services/training/training.service";
import { Excersise, Prisma } from "@prisma/client";

@Injectable()
export class RegisterTrainingUseCase {
     
    constructor(
        private readonly excerciseService: ExcersiseService,
        private readonly trainingService: TrainingService
    ){}

    async execute(data: { name: string, description: string, exercises: Excersise[] }) {
        
        for await (const exercise of data.exercises){
            this.excerciseService.update(exercise);
        }

     const newTraining = await this.trainingService.save({
            excersises: { connect: data.exercises.map(exercise => ({ id: +exercise.id })) },
            name: data.name,
            description: data.description
        });

        return newTraining
    }
    
}