import { Module } from '@nestjs/common';
import { DayController } from '../controllers/day.controller';
import { DayRepositoryImpl } from 'src/infrastructure/repositories/day/day.repository';
import { DayService } from '../services/day/day.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [DayController],
    providers: [DayRepositoryImpl, DayService, PrismaService],
    exports: [DayService]
})
export class DayModule {}
