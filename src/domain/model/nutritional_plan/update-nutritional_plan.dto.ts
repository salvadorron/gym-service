import { PartialType } from '@nestjs/swagger';
import { CreateNutritionalPlanDto } from './create-nutritional_plan.dto';

export class UpdateNutritionalPlanDto extends PartialType(CreateNutritionalPlanDto) {}
