import { Module } from '@nestjs/common';
import { PlanController } from '../controllers/plan.controller';
import { PlanRepositoryImpl } from '../../infrastructure/repositories/plan/plan.repository';
import { PlanService } from '../services/plan/plan.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { AssignTrainerUseCase } from '../usecases/assign-trainer.usecase';
import { TrainerService } from '../services/trainer/trainer.service';
import { TrainerRepositoryImpl } from '../../infrastructure/repositories/trainer/trainer.repository';
import { UserService } from '../services/user/user.service';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user/user.repository';
import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';
import { ClientService } from '../services/client/client.service';
import { ClientRepositoryImpl } from '../../infrastructure/repositories/client/client.repository';
import PdfJsService from '../../infrastructure/services/pdf/pdf.service';

@Module({
  controllers: [PlanController],
  providers: [
    PlanRepositoryImpl,
    PdfJsService,
    PlanService,
    PrismaService,
    TrainerService,
    UserService,
    UserRepositoryImpl,
    ClientService,
    ClientRepositoryImpl,
    BcryptService,
    TrainerRepositoryImpl,
    AssignTrainerUseCase,
  ],
  exports: [PlanService],
})
export class PlanModule {}
