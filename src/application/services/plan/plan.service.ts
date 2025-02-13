import { Injectable } from "@nestjs/common";
import { Client, Plan, Training } from "@prisma/client"
import { PlanRepositoryImpl } from "../../../infrastructure/repositories/plan/plan.repository";


@Injectable()
export class PlanService {
    constructor(private planRepository: PlanRepositoryImpl) {}
    async save(planDto: { name: string, features: string, price: string, duration: string, trainings: Training[] }): Promise<Plan> {
        const plan = await this.planRepository.save({
            name: planDto.name,
            features: planDto.features,
            price: +planDto.price,
            duration: planDto.duration,
            trainings: { connect: planDto.trainings.map(training => ({ id: +training.id })) }
        });
        return plan;
    }
    async getPlans(): Promise<Plan[]> {
        const plan = await this.planRepository.getPlans();
        return plan;
    }
    async getPlanById(id: string): Promise<Plan & { trainings: Training[]; clients: Client[]; }> {
        const plan = await this.planRepository.getPlanById(+id);
        return plan
    }
    
    

}