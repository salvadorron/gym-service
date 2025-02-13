import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';
import { UserService } from '../services/user/user.service';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user/user.repository';
import { LoginUserUseCase } from '../usecases/login-user.usecase';
import { RegisterMemberUseCase } from '../usecases/register-member.usecase';
import { ClientService } from '../services/client/client.service';
import { ClientRepositoryImpl } from '../../../infrastructure/repositories/client/client.repository';
import PdfJsService from '../../../infrastructure/services/pdf/pdf.service';
import { TrainerService } from '../services/trainer/trainer.service';
import { AdminService } from '../services/admin/admin.service';
import { TrainerRepositoryImpl } from '../../../infrastructure/repositories/trainer/trainer.repository';
import { AdminRepositoryImpl } from '../../../infrastructure/repositories/admin/admin.repository';
import { UpdateMemberUseCase } from '../usecases/update-member.usecase';

@Module({
  controllers: [UserController],
  providers: [
    UserRepositoryImpl,
    UserService,
    PrismaService,
    BcryptService,
    LoginUserUseCase,
    RegisterMemberUseCase,
    UpdateMemberUseCase,
    TrainerService,
    AdminService,
    TrainerRepositoryImpl,
    AdminRepositoryImpl,
    ClientRepositoryImpl,
    PdfJsService,
    ClientService
  ],
  exports: [UserService],
})
export class UserModule {}
