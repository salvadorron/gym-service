import { Module } from '@nestjs/common';
import { ParrishController } from '../controllers/parrish.controller';
import { ParrishService } from '../services/parrish/parrish.service';
import { ParrishRepositoryImpl } from '../../infrastructure/repositories/parrish/parrish.repository';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [ParrishController],
    providers: [ParrishRepositoryImpl, ParrishService, PrismaService],
    exports: [ParrishService]
})
export class ParrishModule {}