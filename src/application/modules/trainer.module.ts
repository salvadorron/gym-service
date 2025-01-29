import { Module } from '@nestjs/common';
import { TrainerController } from '../controllers/trainer.controller';
import { TrainerRepositoryImpl } from '../../infrastructure/repositories/trainer/trainer.repository';
import { TrainerService } from '../services/trainer/trainer.service';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user/user.repository';
import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';
import { UserService } from '../services/user/user.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { AssignTrainerUseCase } from '../usecases/assign-trainer.usecase';
import { ClientService } from '../services/client/client.service';
import { ClientRepositoryImpl } from '../../infrastructure/repositories/client/client.repository';
import PdfJsService from 'src/infrastructure/services/pdf/pdf.service';

@Module({
    controllers: [TrainerController],
    providers: [ TrainerRepositoryImpl, PdfJsService, TrainerService, UserRepositoryImpl, BcryptService, ClientService, ClientRepositoryImpl, UserService, PrismaService, AssignTrainerUseCase],
    exports: [TrainerService]

})
export class TrainerModule {}
