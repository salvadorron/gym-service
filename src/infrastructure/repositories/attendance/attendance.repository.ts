import { HttpException, Injectable } from "@nestjs/common";
import { Attendance, Prisma } from "@prisma/client";
import AttendanceRepository from "src/domain/repositories/attendance/attendance.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class AttendanceRepositoryImpl implements AttendanceRepository {
    constructor(private prisma: PrismaService) {}
    
    async save(data: Prisma.AttendanceCreateInput): Promise<Attendance> {
        const prismaAttendance = await this.prisma.attendance.create({ data });
        return prismaAttendance;
    }

    async getAttendances(): Promise<Attendance[]> {
        const prismaAttendances = await this.prisma.attendance.findMany();
        return prismaAttendances;
    }
    
    async getAttendanceById(id: number): Promise<Attendance> {
        const prismaAttendance = await this.prisma.attendance.findUnique({ where: { id } });
        if(!prismaAttendance) throw new HttpException('Attendance not found', 404);
        return prismaAttendance;
    }
    
   
}