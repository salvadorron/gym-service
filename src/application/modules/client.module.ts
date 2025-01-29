import { Module } from '@nestjs/common';
import { ClientRepositoryImpl } from '../../infrastructure/repositories/client/client.repository';
import { ClientService } from '../services/client/client.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { ClientController } from '../controllers/client.controller';
import { UserService } from '../services/user/user.service';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user/user.repository';
import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';
import { RegisterUserClientUseCase } from '../usecases/register-user.usecase';
import { AssignTrainerUseCase } from '../usecases/assign-trainer.usecase';
import { TrainerService } from '../services/trainer/trainer.service';
import { TrainerRepositoryImpl } from '../../infrastructure/repositories/trainer/trainer.repository';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ScheduleRepositoryImpl } from 'src/infrastructure/repositories/schedule/schedule.repository';
import { PlanService } from '../services/plan/plan.service';
import { PlanRepositoryImpl } from 'src/infrastructure/repositories/plan/plan.repository';
import PdfJsService from 'src/infrastructure/services/pdf/pdf.service';

@Module({
    controllers: [ClientController],
    providers: [ClientRepositoryImpl, PdfJsService, ClientService, UserRepositoryImpl, ScheduleService, ScheduleRepositoryImpl, PlanService, PlanRepositoryImpl, BcryptService, UserService, PrismaService, TrainerRepositoryImpl, TrainerService, RegisterUserClientUseCase, AssignTrainerUseCase],
    exports: [ClientService]

})
export class ClientModule {}
