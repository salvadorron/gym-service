import { Module } from '@nestjs/common';
import { AdminService } from '../services/admin/admin.service';
import { AdminController } from '../controllers/admin.controller';
import { AdminRepositoryImpl } from 'src/infrastructure/repositories/admin/admin.repository';
import { UserRepositoryImpl } from 'src/infrastructure/repositories/user/user.repository';
import { BcryptService } from 'src/infrastructure/services/bcrypt/bcrypt.service';
import { UserService } from '../services/user/user.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [AdminController,],
    providers: [AdminRepositoryImpl, AdminService, UserRepositoryImpl, BcryptService, UserService, PrismaService],
    exports: [AdminService]
})
export class AdminModule {}
