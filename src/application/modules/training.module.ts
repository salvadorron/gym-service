import { Module } from '@nestjs/common';
import { TrainingController } from '../controllers/training.controller';
import { TrainingRepositoryImpl } from '../../infrastructure/repositories/training/training.repository';
import { TrainingService } from '../services/training/training.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { RegisterTrainingUseCase } from '../usecases/register-training.usecase';
import { ExcersiseService } from '../services/excercise/excersise.service';
import { ExcersiseRepositoryImpl } from 'src/infrastructure/repositories/excercise/excersise.repository';

@Module({
    controllers: [TrainingController],
    providers: [TrainingRepositoryImpl, RegisterTrainingUseCase, ExcersiseService, ExcersiseRepositoryImpl, TrainingService, PrismaService],
    exports: [TrainingService]
})
export class TrainingModule {}
