import { Injectable } from "@nestjs/common";
import { Plan } from "@prisma/client"
import { CreatePlanDto } from "src/domain/model/plan/create-plan.dto";
import { PlanRepositoryImpl } from "src/infrastructure/repositories/plan/plan.repository";


@Injectable()
export class PlanService {
    constructor(private planRepository: PlanRepositoryImpl) {}
    async save(data: CreatePlanDto): Promise<Plan> {
        const plan = await this.planRepository.save({
            clients: {
                connect: {
                    id: data.clientId
                }
            },
            trainer: {
                connect: {
                    id: data.trainerId
                }
            },
            description: data.description,
            amount: data.amount,
        });
        return plan;
    }
    async getPlans(): Promise<Plan[]> {
        const plan = await this.planRepository.getPlans();
        return plan;
    }
    async getPlanById(id: string): Promise<Plan> {
        const plan = await this.planRepository.getPlanById(+id);
        return plan
    }
    
    

}