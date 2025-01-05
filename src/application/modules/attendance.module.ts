import { Module } from '@nestjs/common';
import { AttendanceController } from '../controllers/attendance.controller';
import { AttendanceRepositoryImpl } from '../../infrastructure/repositories/attendance/attendance.repository';
import { AttendanceService } from '../services/attendance/attendance.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [AttendanceController],
    providers: [AttendanceRepositoryImpl, AttendanceService, PrismaService],
    exports: [AttendanceService]
})
export class AttendanceModule {}
