import { Module } from '@nestjs/common';
import { TrainingController } from '../controllers/training.controller';
import { TrainingRepositoryImpl } from '../../infrastructure/repositories/training/training.repository';
import { TrainingService } from '../services/training/training.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [TrainingController],
    providers: [TrainingRepositoryImpl, TrainingService, PrismaService],
    exports: [TrainingService]
})
export class TrainingModule {}
