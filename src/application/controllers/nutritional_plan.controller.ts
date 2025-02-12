import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutritionalPlanService } from '../services/nutritional_plan/nutritional_plan.service';
import { CreateNutritionalPlanDto } from '../../domain/model/nutritional_plan/create-nutritional_plan.dto';
import { UpdateNutritionalPlanDto } from '../../domain/model/nutritional_plan/update-nutritional_plan.dto';

@Controller('nutritional-plan')
export class NutritionalPlanController {
  constructor(private readonly nutritionalPlanService: NutritionalPlanService) {}

  @Post()
  create(@Body() createNutritionalPlanDto: CreateNutritionalPlanDto) {
    return this.nutritionalPlanService.create(createNutritionalPlanDto);
  }

  @Get()
  findAll() {
    return this.nutritionalPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutritionalPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutritionalPlanDto: UpdateNutritionalPlanDto) {
    return this.nutritionalPlanService.update(+id, updateNutritionalPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutritionalPlanService.remove(+id);
  }
}
