import { Module } from '@nestjs/common';
import { ScheduleController } from '../controllers/schedule.controller';
import { ScheduleRepositoryImpl } from '../../infrastructure/repositories/schedule/schedule.repository';
import { ScheduleService } from '../services/schedule/schedule.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [ScheduleController],
    providers: [ScheduleRepositoryImpl, ScheduleService, PrismaService],
    exports: [ScheduleService]
})
export class ScheduleModule {}
