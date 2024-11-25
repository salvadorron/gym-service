import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import AttendanceRepository from "src/domain/repositories/attendance/attendance.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class AttendanceRepositoryImpl implements AttendanceRepository {
    constructor(private prisma: PrismaService) {}
    
    save(data: Prisma.AttendanceCreateInput): Promise<Prisma.AttendanceCreateInput> {
        throw new Error("Method not implemented.");
    }
    getAttendances(): Promise<Prisma.AttendanceCreateInput[]> {
        throw new Error("Method not implemented.");
    }
    getAttendanceById(id: number): Promise<Prisma.AttendanceCreateInput> {
        throw new Error("Method not implemented.");
    }
}