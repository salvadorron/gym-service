import { Injectable } from "@nestjs/common";
import { Prisma, Schedule } from "@prisma/client"
import { CreateScheduleDto } from "src/domain/model/schedule/create-schedule.dto";
import { ScheduleRepositoryImpl } from "src/infrastructure/repositories/schedule/schedule.repository";

@Injectable()
export class ScheduleService {
    constructor(private scheduleRepository: ScheduleRepositoryImpl) {}
    
    async save(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
        const schedulePrisma = await this.scheduleRepository.save({
            duration: createScheduleDto.duration,
            time_start: createScheduleDto.timeStart,
            time_end: createScheduleDto.timeEnd,
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