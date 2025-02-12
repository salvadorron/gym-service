import { Injectable } from "@nestjs/common";
import { NutritionalPlan } from "@prisma/client";
import { CreateNutritionalPlanDto } from "src/domain/model/nutritional_plan/create-nutritional_plan.dto";
import { UpdateNutritionalPlanDto } from "src/domain/model/nutritional_plan/update-nutritional_plan.dto";
import { NutritionalPlanRepository } from "src/domain/repositories/nutritional_plan/nutritional_plan.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class NutritionalPlanRepositoryImpl implements NutritionalPlanRepository {
    
    constructor(private prisma: PrismaService) {}
    
    async create(createNutritionalPlanDto: CreateNutritionalPlanDto): Promise<NutritionalPlan> {
        return this.prisma.nutritionalPlan.create({ data: {
            calories: +createNutritionalPlanDto.calories,
            startDate: createNutritionalPlanDto.startDate,
            endDate: createNutritionalPlanDto.endDate,
            planType: 'dawdw',
            status: 'activo'
        } });
    }
    async findAll(): Promise<NutritionalPlan[]> {
        return this.prisma.nutritionalPlan.findMany()
    }
    async findOne(id: number): Promise<NutritionalPlan> {
        return this.prisma.nutritionalPlan.findUnique({ where: { id } })
    }
    async update(id: number, updateNutritionalPlanDto: UpdateNutritionalPlanDto): Promise<NutritionalPlan> {
        return this.prisma.nutritionalPlan.update({ data: updateNutritionalPlanDto, where: { id } })
    }
    async remove(id: number): Promise<NutritionalPlan> {
        return this.prisma.nutritionalPlan.delete({ where: { id } })
    }
    
}