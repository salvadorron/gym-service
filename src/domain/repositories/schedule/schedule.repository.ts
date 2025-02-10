import { Prisma, Schedule } from '@prisma/client';

export interface ScheduleRepository {
  save(data: Prisma.ScheduleCreateInput): Promise<Schedule>;
  getSchedules(): Promise<Schedule[]>;
  getScheduleById(id: number): Promise<Schedule>;
}
