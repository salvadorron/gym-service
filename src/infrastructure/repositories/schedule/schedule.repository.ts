import { Injectable } from "@nestjs/common";
import { Prisma, Schedule } from "@prisma/client"
import { ScheduleRepository } from "src/domain/repositories/schedule/schedule.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class ScheduleRepositoryImpl implements ScheduleRepository {
    constructor(private prisma: PrismaService) {}
    save(data: Prisma.ScheduleCreateInput): Promise<Schedule> {
        throw new Error("Method not implemented.");
    }
    getSchedules(): Promise<Schedule[]> {
        throw new Error("Method not implemented.");
    }
    getScheduleById(id: number): Promise<Schedule> {
        throw new Error("Method not implemented.");
    }


}