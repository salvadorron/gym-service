import { Module } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';
import { NutritionalPlanController } from '../controllers/nutritional_plan.controller';
import { NutritionalPlanService } from '../services/nutritional_plan/nutritional_plan.service';
import { NutritionalPlanRepositoryImpl } from '../../infrastructure/repositories/nutritional_plan/nutritional_plan.repository';
import { UserService } from '../services/user/user.service';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user/user.repository';
import { BcryptService } from '../../infrastructure/services/bcrypt/bcrypt.service';

@Module({
  controllers: [NutritionalPlanController],
  providers: [NutritionalPlanService, NutritionalPlanRepositoryImpl, PrismaService, UserService, UserRepositoryImpl, BcryptService],
  exports: [NutritionalPlanService]
})
export class NutritionalPlanModule {}
