import { Injectable } from '@nestjs/common';
import { Day } from '@prisma/client';
import { CreateDayDto } from '../../../domain/model/day/create-day.dto';
import { DayRepositoryImpl } from 'src/infrastructure/repositories/day/day.repository';

@Injectable()
export class DayService {
  constructor(private dayRepository: DayRepositoryImpl) {}

  async save(createDayDto: CreateDayDto): Promise<Day> {
    const day = await this.dayRepository.save({
      day_of_week: createDayDto.dayOfWeek,
      shift: createDayDto.shift,
      schedule: {
        connect: {
          id: createDayDto.scheduleId,
        },
      },
    });
    return day;
  }
  async getDays(): Promise<Day[]> {
    const days = await this.dayRepository.getDays();
    return days;
  }
  async getDayById(id: string): Promise<Day> {
    const day = await this.dayRepository.getDayById(+id);
    return day;
  }
}
