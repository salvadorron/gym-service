import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrainingService } from '../services/training/training.service';
import { CreateTrainingDto } from '../../domain/model/training/create-training.dto';
import { RegisterTrainingUseCase } from '../usecases/register-training.usecase';
import { Excersise } from '@prisma/client';

@Controller('training')
export class TrainingController {
    constructor(
        private readonly trainingService: TrainingService,
        private readonly registerTrainingUseCase: RegisterTrainingUseCase
    ){}

  @Post()
  async create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingService.save(createTrainingDto);
  }

  @Get()
  async findAll() {
    return this.trainingService.getTrainings();
  }

    @Post('register')
    async registerTraining(@Body() data: { name: string, description: string, exercises: Excersise[] }) {
        return this.registerTrainingUseCase.execute(data);
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.trainingService.getTrainingById(id);
    }
}
