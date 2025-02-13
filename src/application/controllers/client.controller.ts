import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  StreamableFile,
} from '@nestjs/common';
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
    private readonly assignTrainerUseCase: AssignTrainerUseCase,
  ) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const newClient = await this.clientService.save(createClientDto);
    return newClient;
  }

  @Post('register')
  async registerUserClient(
    @Body() registerUserClientDto: RegisterUserClientDto,
  ) {
    const newUserClient = await this.registerClientUsecase.execute(
      registerUserClientDto,
    );
    return newUserClient.toSnapshot();
  }

  @Get(':clientId/report')
  async getReport(
    @Param('clientId') clientId: number,
  ): Promise<StreamableFile> {
    const pdfBuffer = await this.clientService.generateSchedulePDF(clientId);
    return new StreamableFile(pdfBuffer, {
      type: 'application/pdf',
      disposition: 'attachment; filename="reporte.pdf"',
    });
  }

  @Get()
  async findAll() {
    const clients = await this.clientService.getClients();
    return clients;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const client = await this.clientService.getClientById(id);
    return client;
  }

  @Patch('assign-plan')
  async assignMembership(
    @Body()
    props : {
      id: number;
      planId: number;
      payment: { method: string; description: string; amount: number, startDate: Date, endDate: Date, status: string };
      schedule: { day: string, selected: boolean, shift: string }[];
    },
  ) {

    const client = await this.clientService.assignMembership(
      props.id,
      props.planId,
      props.payment
    );

    const selectedSchedule = props.schedule
      .filter(day => day.shift)
      .map(({day, shift}) => ({day, shift}))

    const plan = await this.planService.getPlanById(props.planId.toString());

    plan.trainings.forEach((training) => {
      this.scheduleService.save({
        trainingId: training.id,
        days: selectedSchedule
      });
    });

    if (!client.trainer_id) {
      await this.assignTrainerUseCase.execute({ clientId: props.id });
    }

    return client;
  }

}
