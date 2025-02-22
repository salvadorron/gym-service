import { HttpException, Injectable } from '@nestjs/common';
import { Client, Plan, Prisma, Training } from '@prisma/client';
import { PlanRepository } from '../../../domain/repositories/plan/plan.repository';
import { PrismaService } from '../../../infrastructure/services/prisma/prisma.service';

@Injectable()
export class PlanRepositoryImpl implements PlanRepository {
    constructor(private prisma: PrismaService) {}
    async save(data: Prisma.PlanCreateInput): Promise<Plan> {
        const plan = await this.prisma.plan.create({ data, include: {trainings: true} });
        return plan;
    }

  async getPlans(): Promise<Plan[]> {
    const plan = await this.prisma.plan.findMany({
      include: { trainings: {include: {excersises: true, schedule: {include: {days: true}}}}, clients: true },
    });
    return plan;
  }

  async getPlanById(
    id: number,
  ): Promise<Plan & { trainings: Training[]; clients: Client[] }> {
    const plan = await this.prisma.plan.findFirst({
      where: { id },
      include: { trainings: {include: {excersises: true, schedule: {include: {days: true}}}}, clients: true },
    });
    if (!plan) throw new HttpException('Plan not found', 404); 
    return plan;
  }
}
