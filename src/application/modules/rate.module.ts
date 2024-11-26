import { Module } from '@nestjs/common';
import { RateController } from '../controllers/rate.controller';
import { RateRepositoryImpl } from 'src/infrastructure/repositories/rate/rate.repository';
import { RateService } from '../services/rate/rate.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [RateController],
    providers: [RateRepositoryImpl, RateService, PrismaService],
    exports: [RateService]
})
export class RateModule {}
