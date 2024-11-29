import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, Schedule } from "@prisma/client"
import { ScheduleRepository } from "src/domain/repositories/schedule/schedule.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class ScheduleRepositoryImpl implements ScheduleRepository {
    constructor(private prisma: PrismaService) {}
    async save(data: Prisma.ScheduleCreateInput): Promise<Schedule> {
        const schedulePrisma = await this.prisma.schedule.create({ data, include: { days: true } });
        return schedulePrisma;
    }
    async getSchedules(): Promise<Schedule[]> {
        const schedulePrismas = await this.prisma.schedule.findMany({ include: { days: true } });
        return schedulePrismas;
    }
    async getScheduleById(id: number): Promise<Schedule> {
        const schedulePrisma = await this.prisma.schedule.findFirst({ where: { id }, include: { days: true } });
        if(!schedulePrisma) throw new HttpException("Schedule not found", 404);
        return schedulePrisma;
    }


}