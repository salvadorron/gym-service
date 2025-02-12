import { Injectable } from '@nestjs/common';
import { CreateNutritionalPlanDto } from '../../../domain/model/nutritional_plan/create-nutritional_plan.dto';
import { UpdateNutritionalPlanDto } from '../../../domain/model/nutritional_plan/update-nutritional_plan.dto';
import { NutritionalPlanRepositoryImpl } from 'src/infrastructure/repositories/nutritional_plan/nutritional_plan.repository';

@Injectable()
export class NutritionalPlanService {
  constructor(private readonly nutritionalRepository: NutritionalPlanRepositoryImpl) {}
  create(createNutritionalPlanDto: CreateNutritionalPlanDto) {
    return this.nutritionalRepository.create(createNutritionalPlanDto);
  }

  findAll() {
    return this.nutritionalRepository.findAll()
  }

  findOne(id: number) {
    return this.nutritionalRepository.findOne(id);
  }

  update(id: number, updateNutritionalPlanDto: UpdateNutritionalPlanDto) {
    return this.nutritionalRepository.update(id, updateNutritionalPlanDto)
  }

  remove(id: number) {
    return this.nutritionalRepository.remove(id);
  }
}
