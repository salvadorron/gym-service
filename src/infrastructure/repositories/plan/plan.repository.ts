import { HttpException, Injectable } from "@nestjs/common";
import { Plan, Prisma } from "@prisma/client"
import { PlanRepository } from "src/domain/repositories/plan/plan.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";


@Injectable()
export class PlanRepositoryImpl implements PlanRepository {
    constructor(private prisma: PrismaService) {}
    async save(data: Prisma.PlanCreateInput): Promise<Plan> {
        const plan = await this.prisma.plan.create({ data });
        return plan;
    }
    async getPlans(): Promise<Plan[]> {
        const plan = await this.prisma.plan.findMany({include: { trainings: true}});
        return plan;
    }
    async getPlanById(id: number): Promise<Plan> {
        const plan = await this.prisma.plan.findFirst({ where: { id }, include: { trainings: true } });
        if(!plan) throw new HttpException('Plan not found', 404);
        return plan
    }
    
    

}