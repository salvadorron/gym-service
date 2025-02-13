import { Module } from '@nestjs/common';
import { ExcersiseController } from '../controllers/excersise.controller';
import { ExcersiseRepositoryImpl } from '../../infrastructure/repositories/excercise/excersise.repository';
import { ExcersiseService } from '../services/excercise/excersise.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { RegisterTrainingUseCase } from '../usecases/register-training.usecase';
import { TrainingService } from '../services/training/training.service';
import { TrainingRepositoryImpl } from '../../infrastructure/repositories/training/training.repository';

@Module({
    controllers: [ExcersiseController],
    providers: [ExcersiseRepositoryImpl, TrainingRepositoryImpl, TrainingService, RegisterTrainingUseCase, ExcersiseService, PrismaService],
    exports: [ExcersiseService]
})
export class ExcersiseModule {}
