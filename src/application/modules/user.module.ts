import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';
import { BcryptService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { UserService } from '../services/user/user.service';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserRepositoryImpl, UserService, PrismaService, BcryptService],
  exports: [UserService],
})
export class UserModule {}
