import { Module } from '@nestjs/common';
import { TrainerController } from '../controllers/trainer.controller';
import { TrainerRepositoryImpl } from 'src/infrastructure/repositories/trainer/trainer.repository';
import { TrainerService } from '../services/trainer/trainer.service';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user/user.repository';
import { BcryptService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { UserService } from '../services/user/user.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [TrainerController],
    providers: [ TrainerRepositoryImpl, TrainerService, UserRepositoryImpl, BcryptService, UserService, PrismaService],
    exports: [TrainerService]

})
export class TrainerModule {}
