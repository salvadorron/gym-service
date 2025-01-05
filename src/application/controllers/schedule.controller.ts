import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScheduleService } from '../services/schedule/schedule.service';
import { CreateScheduleDto } from '../../domain/model/schedule/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService){}

    @Post()
    async create(@Body() createScheduleDto: CreateScheduleDto) {
        return this.scheduleService.save(createScheduleDto);
    }

    @Get()
    async findAll() {
        return this.scheduleService.getSchedules();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.scheduleService.getScheduleById(id);
    }
}
