import { Injectable } from '@nestjs/common';
import { Schedule } from '@prisma/client';
import { CreateScheduleDto } from '../../../domain/model/schedule/create-schedule.dto';
import { ScheduleRepositoryImpl } from '../../../infrastructure/repositories/schedule/schedule.repository';

@Injectable()
export class ScheduleService {
  constructor(private scheduleRepository: ScheduleRepositoryImpl) {}

  async save(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    const schedulePrisma = await this.scheduleRepository.save({
      training: { connect: { id: createScheduleDto.trainingId } },
      days: {
        create: createScheduleDto.days.map((day) => ({ day_of_week: day.day, shift: day.shift })),
      }
    });
    return schedulePrisma;
  }

  async getSchedules(): Promise<Schedule[]> {
    const schedulePrismas = await this.scheduleRepository.getSchedules();
    return schedulePrismas;
  }

  async getScheduleById(id: string): Promise<Schedule> {
    const schedulePrisma = await this.scheduleRepository.getScheduleById(+id);
    return schedulePrisma;
  }
}
