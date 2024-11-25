import { Plan, Prisma } from "@prisma/client"

export interface PlanRepository {
    save(data: Prisma.PlanCreateInput): Promise<Plan>
    getPlans(): Promise<Plan[]>
    getPlanById(id: number): Promise<Plan>
}