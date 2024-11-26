import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AttendanceService } from '../services/attendance/attendance.service';
import { CreateAttendenceDto } from 'src/domain/model/attendence/create-attendence.dto';

@Controller('attendance')
export class AttendanceController {

    constructor(private readonly attendanceServide: AttendanceService){}

    @Post()
    async create(@Body() createAttendanceDto: CreateAttendenceDto) {
        return this.attendanceServide.save(createAttendanceDto);
    }

    @Get()
    async findAll() {
        return this.attendanceServide.getAttendances();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.attendanceServide.getAttendanceById(id);
    }
}
