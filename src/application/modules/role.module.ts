import { Module } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { RoleController } from '../controllers/role.controller';
import { RoleRepositoryImpl } from '../../infrastructure/repositories/role/role.repository';
import { RoleService } from '../services/role/role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleRepositoryImpl, RoleService, PrismaService],
  exports: [RoleService]
})
export class RoleModule {}
