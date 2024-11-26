import { Module } from '@nestjs/common';
import { PlanController } from '../controllers/plan.controller';
import { PlanRepositoryImpl } from 'src/infrastructure/repositories/plan/plan.repository';
import { PlanService } from '../services/plan/plan.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [PlanController],
    providers: [PlanRepositoryImpl, PlanService, PrismaService],
    exports: [PlanService]
})
export class PlanModule {}
