import { Module } from '@nestjs/common';
import { ExcersiseController } from '../controllers/excersise.controller';
import { ExcersiseRepositoryImpl } from '../../infrastructure/repositories/excercise/excersise.repository';
import { ExcersiseService } from '../services/excercise/excersise.service';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';

@Module({
  controllers: [ExcersiseController],
  providers: [ExcersiseRepositoryImpl, ExcersiseService, PrismaService],
  exports: [ExcersiseService],
})
export class ExcersiseModule {}
