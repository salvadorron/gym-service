import { Module } from '@nestjs/common';
import { NutritionalPlanService } from '../services/nutritional_plan/nutritional_plan.service';
import { NutritionalPlanController } from '../controllers/nutritional_plan.controller';

@Module({
  controllers: [NutritionalPlanController],
  providers: [NutritionalPlanService],
})
export class NutritionalPlanModule {}
