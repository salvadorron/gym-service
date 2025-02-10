import { HttpException, Injectable } from '@nestjs/common';
import { Day, Prisma } from '@prisma/client';
import { DayRepository } from '../../../domain/repositories/day/day.repository';
import { PrismaService } from '../../../infrastructure/services/prisma/prisma.service';

@Injectable()
export class DayRepositoryImpl implements DayRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: Prisma.DayCreateInput): Promise<Day> {
    const day = await this.prisma.day.create({ data });
    return day;
  }
  async getDays(): Promise<Day[]> {
    const days = await this.prisma.day.findMany();
    return days;
  }
  async getDayById(id: number): Promise<Day> {
    const day = await this.prisma.day.findFirst({ where: { id } });
    if (!day) throw new HttpException('Day not found', 404);
    return day;
  }
}
