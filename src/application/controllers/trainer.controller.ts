import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTrainerDto } from 'src/domain/model/trainer/create-trainer.dto';
import { TrainerService } from '../services/trainer/trainer.service';

@Controller('trainer')
export class TrainerController {


    constructor(private readonly trainerService: TrainerService) {}

    @Post()
    async create(@Body() createTrainerDto: CreateTrainerDto) {
        const newTrainer = await this.trainerService.save(createTrainerDto);
        return newTrainer;
    }

    @Get()
    async findAll() {
        const trainers = await this.trainerService.getClients();
        return trainers;
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const trainer = await this.trainerService.getClientById(id);
        return trainer;
    }

}
