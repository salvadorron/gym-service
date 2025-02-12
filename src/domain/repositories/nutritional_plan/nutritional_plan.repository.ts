import { NutritionalPlan } from "@prisma/client"
import { CreateNutritionalPlanDto } from "src/domain/model/nutritional_plan/create-nutritional_plan.dto"
import { UpdateNutritionalPlanDto } from "src/domain/model/nutritional_plan/update-nutritional_plan.dto"

export interface NutritionalPlanRepository {
      create(createNutritionalPlanDto: CreateNutritionalPlanDto): Promise<NutritionalPlan> 
      findAll(): Promise<NutritionalPlan[]>
      findOne(id: number): Promise<NutritionalPlan>
      update(id: number, updateNutritionalPlanDto: UpdateNutritionalPlanDto): Promise<NutritionalPlan>
      remove(id: number): Promise<NutritionalPlan>
}