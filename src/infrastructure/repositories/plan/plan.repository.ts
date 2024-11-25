import { Injectable } from "@nestjs/common";
import { Day, Prisma } from "@prisma/client"
import { DayRepository } from "src/domain/repositories/day/day.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";


@Injectable()
export class DayRepositoryImpl implements DayRepository {
    constructor(private prisma: PrismaService) {}
    
    save(data: Prisma.DayCreateInput): Promise<Day> {
        throw new Error("Method not implemented.");
    }
    getDays(): Promise<Day[]> {
        throw new Error("Method not implemented.");
    }
    getDayById(id: number): Promise<Day> {
        throw new Error("Method not implemented.");
    }

}