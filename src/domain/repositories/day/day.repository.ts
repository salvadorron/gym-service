import { Day, Prisma } from '@prisma/client';

export interface DayRepository {
  save(data: Prisma.DayCreateInput): Promise<Day>;
  getDays(): Promise<Day[]>;
  getDayById(id: number): Promise<Day>;
}
