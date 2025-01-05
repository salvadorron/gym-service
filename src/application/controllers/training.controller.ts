import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrainingService } from '../services/training/training.service';
import { CreateTrainingDto } from '../../domain/model/training/create-training.dto';

@Controller('training')
export class TrainingController {
    constructor(private readonly trainingService: TrainingService){}

    @Post()
    async create(@Body() createTrainingDto: CreateTrainingDto) {
        return this.trainingService.save(createTrainingDto);
    }

    @Get()
    async findAll() {
        return this.trainingService.getTrainings();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.trainingService.getTrainingById(id);
    }
}
