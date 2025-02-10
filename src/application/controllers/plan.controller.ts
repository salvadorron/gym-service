import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlanService } from '../services/plan/plan.service';
import { CreatePlanDto } from '../../domain/model/plan/create-plan.dto';
import { Training } from '@prisma/client';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

    @Post()
    async create(@Body() plan: { name: string, features: string, price: string, duration: string, trainings: Training[] }) {
        return this.planService.save(plan);
    }

    @Get()
    async findAll() {
        return this.planService.getPlans();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.planService.getPlanById(id);
    }

}
