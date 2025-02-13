import { Injectable } from "@nestjs/common";
import { NutritionalPlan } from "@prisma/client";
import { UserService } from "src/application/services/user/user.service";
import { CreateNutritionalPlanDto } from "../../../domain/model/nutritional_plan/create-nutritional_plan.dto";
import { UpdateNutritionalPlanDto } from "../../../domain/model/nutritional_plan/update-nutritional_plan.dto";
import { NutritionalPlanRepository } from "../../../domain/repositories/nutritional_plan/nutritional_plan.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class NutritionalPlanRepositoryImpl implements NutritionalPlanRepository {
    
    constructor(
        private prisma: PrismaService,
        private userService: UserService
    ) {}
    
    async create(createNutritionalPlanDto: CreateNutritionalPlanDto): Promise<NutritionalPlan> {

        const user = await this.userService.getUserById(createNutritionalPlanDto.userId);

        if(!user.toSnapshot().nutritional_plan){
            return this.prisma.nutritionalPlan.create({ data: {
                calories: +createNutritionalPlanDto.calories,
                startDate: createNutritionalPlanDto.startDate,
                endDate: createNutritionalPlanDto.endDate,
                planType: createNutritionalPlanDto.planType,
                dinner: createNutritionalPlanDto.dinner,
                breakfast: createNutritionalPlanDto.breakfast,
                lunch: createNutritionalPlanDto.lunch,
                planName: createNutritionalPlanDto.planName,
                snacks: createNutritionalPlanDto.snacks,
                status: 'Activo',
                users: {
                    connect: {
                        id: +createNutritionalPlanDto.userId
                    }
                }
            } });
        }


        return this.prisma.nutritionalPlan.update({
            data: {
                calories: +createNutritionalPlanDto.calories,
                startDate: createNutritionalPlanDto.startDate,
                endDate: createNutritionalPlanDto.endDate,
                planType: createNutritionalPlanDto.planType,
                dinner: createNutritionalPlanDto.dinner,
                breakfast: createNutritionalPlanDto.breakfast,
                lunch: createNutritionalPlanDto.lunch,
                planName: createNutritionalPlanDto.planName,
                snacks: createNutritionalPlanDto.snacks,
                status: 'Activo',
                users: {
                    connect: {
                        id: +createNutritionalPlanDto.userId
                    }
                }
            },
            where: {
                id: user.toSnapshot().nutritional_plan_id
            }
        })

        
    }
    async findAll(): Promise<NutritionalPlan[]> {
        return this.prisma.nutritionalPlan.findMany()
    }
    async findOne(id: number): Promise<NutritionalPlan> {
        return this.prisma.nutritionalPlan.findUnique({ where: { id } })
    }
    async update(id: number, {calories, endDate, planType, startDate, status, breakfast, dinner, lunch, planName, snacks}: UpdateNutritionalPlanDto): Promise<NutritionalPlan> {
        return this.prisma.nutritionalPlan.update({ data: {
            calories: +calories,
            endDate,
            planType,
            startDate,
            status,
            breakfast,
            dinner,
            lunch,
            planName,
            snacks,
        }, where: { id } })
    }
    async remove(id: number): Promise<NutritionalPlan> {
        return this.prisma.nutritionalPlan.delete({ where: { id } })
    }
    
}