import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';
import { UserService } from '../services/user/user.service';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user/user.repository';
import { LoginUserUseCase } from '../usecases/login-user.usecase';

@Module({
  controllers: [UserController],
  providers: [UserRepositoryImpl, UserService, PrismaService, BcryptService, LoginUserUseCase],
  exports: [UserService],
})
export class UserModule {}
