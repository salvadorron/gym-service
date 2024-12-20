import { Module } from '@nestjs/common';
import { PlanController } from '../controllers/plan.controller';
import { PlanRepositoryImpl } from 'src/infrastructure/repositories/plan/plan.repository';
import { PlanService } from '../services/plan/plan.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';
import { AssignTrainerUseCase } from '../usecases/assign-trainer.usecase';
import { TrainerService } from '../services/trainer/trainer.service';
import { TrainerRepositoryImpl } from 'src/infrastructure/repositories/trainer/trainer.repository';
import { UserService } from '../services/user/user.service';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user/user.repository';
import { BcryptService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { ClientService } from '../services/client/client.service';
import { ClientRepositoryImpl } from 'src/infrastructure/repositories/client/client.repository';

@Module({
    controllers: [PlanController],
    providers: [PlanRepositoryImpl, PlanService, PrismaService, TrainerService, UserService, UserRepositoryImpl, ClientService, ClientRepositoryImpl, BcryptService, TrainerRepositoryImpl, AssignTrainerUseCase],
    exports: [PlanService]
})
export class PlanModule {}
