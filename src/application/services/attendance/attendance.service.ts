import { Injectable } from '@nestjs/common';
import { Attendance } from '@prisma/client';
import { CreateAttendenceDto } from '../../../domain/model/attendence/create-attendence.dto';
import { AttendanceRepositoryImpl } from '../../../infrastructure/repositories/attendance/attendance.repository';

@Injectable()
export class AttendanceService {
  constructor(private attendanceRepository: AttendanceRepositoryImpl) {}

  async save(createAttendanceDto: CreateAttendenceDto): Promise<Attendance> {
    const newAttendance = await this.attendanceRepository.save({
      attendance_date: createAttendanceDto.attendenceDate,
      status: createAttendanceDto.status,
      client: {
        connect: { id: createAttendanceDto.clientId },
      },
      schedule: {
        connect: { id: createAttendanceDto.scheduleId },
      },
    });
    return newAttendance;
  }
  async getAttendances(): Promise<Attendance[]> {
    const attendances = await this.attendanceRepository.getAttendances();
    return attendances;
  }
  async getAttendanceById(id: string): Promise<Attendance> {
    const attendance = await this.attendanceRepository.getAttendanceById(+id);
    return attendance;
  }
}
