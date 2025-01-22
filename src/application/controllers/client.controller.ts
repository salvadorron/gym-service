import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientService } from '../services/client/client.service';
import { CreateClientDto } from '../../domain/model/client/create-client.dto';
import { RegisterUserClientUseCase } from '../usecases/register-user.usecase';
import { RegisterUserClientDto } from '../../domain/model/client/register-userclient.dto';
import { AssignTrainerUseCase } from '../usecases/assign-trainer.usecase';
import { ScheduleService } from '../services/schedule/schedule.service';
import { PlanService } from '../services/plan/plan.service';

@Controller('client')
export class ClientController {

    constructor(
        private readonly clientService: ClientService,
        private readonly scheduleService: ScheduleService,
        private readonly planService: PlanService,
        private readonly registerClientUsecase: RegisterUserClientUseCase,
        private readonly assignTrainerUseCase: AssignTrainerUseCase
    ){}


       
    @Post()
    async create(@Body() createClientDto: CreateClientDto) {
        const newClient = await this.clientService.save(createClientDto);
        return newClient
    }

    @Post('register')
    async registerUserClient(@Body() registerUserClientDto: RegisterUserClientDto) {
        const newUserClient = await this.registerClientUsecase.execute(registerUserClientDto);
        return newUserClient.toSnapshot();
    }

    @Get()
    async findAll() {
        const clients = await this.clientService.getClients();
        return clients
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const client = await this.clientService.getClientById(id);
        return client;
    }

    @Patch('assign-plan')
    async assignMembership(@Body() { id, planId, payment, days, turn }: { id: number, planId: number, days: number[], turn: string, payment: { method: string, description: string, amount: number } }) {
        
        const days_of_week = {
            0: 'Monday',
            1: 'Tuesday',
            2: 'Wednesday',
            3: 'Thursday',
            4: 'Friday'
        }

        const client = await this.clientService.assignMembership(id, planId, payment);

        console.log(days);
        const selectedDays = days.map((day, index) => day === 1 ? days_of_week[index] : undefined)
        console.log(selectedDays);
        
        const plan = await this.planService.getPlanById(planId.toString())
        
        plan.trainings.forEach(training => {
            this.scheduleService.save({
                trainingId: training.id,
                days: selectedDays,
                turn: turn
            })
        })

        if(!client.trainer_id) {
            await this.assignTrainerUseCase.execute({ clientId: id });
        }
        
        return client;
    }

    

}
