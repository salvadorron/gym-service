import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DayService } from '../services/day/day.service';
import { CreateDayDto } from '../../domain/model/day/create-day.dto';

@Controller('day')
export class DayController {
  constructor(private readonly dayServide: DayService) {}

  @Post()
  async create(@Body() createDayDto: CreateDayDto) {
    return this.dayServide.save(createDayDto);
  }

  @Get()
  async findAll() {
    return this.dayServide.getDays();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.dayServide.getDayById(id);
  }
}
