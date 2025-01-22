import { Client, Plan, Prisma, Training } from "@prisma/client"

export interface PlanRepository {
    save(data: Prisma.PlanCreateInput): Promise<Plan>
    getPlans(): Promise<Plan[]>
    getPlanById(id: number): Promise<Plan & { trainings: Training[]; clients: Client[]; }>
}