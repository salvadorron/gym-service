import { Module } from '@nestjs/common';
import { MunicipalityController } from '../controllers/municipality.controller';
import { MunicipalityService } from '../services/municipality/municipality.service';
import { MunicipalityRepositoryImpl } from '../../infrastructure/repositories/municipality/municipality.repository';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [MunicipalityController],
    providers: [MunicipalityRepositoryImpl, MunicipalityService, PrismaService],
    exports: [MunicipalityService]
})
export class MunicipalityModule {}
