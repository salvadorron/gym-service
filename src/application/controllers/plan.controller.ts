import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlanService } from '../services/plan/plan.service';
import { CreatePlanDto } from '../../domain/model/plan/create-plan.dto';

@Controller('plan')
export class PlanController {

    constructor(
        private readonly planService: PlanService
    ){}

    @Post()
    async create(@Body() createPlanDto: CreatePlanDto) {
        return this.planService.save(createPlanDto);
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
