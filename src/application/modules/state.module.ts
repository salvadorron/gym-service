import { Module } from '@nestjs/common';
import { StateController } from '../controllers/state.controller';
import { StateService } from '../services/state/state.service';
import { StateRepositoryImpl } from '../../infrastructure/repositories/state/state.repository';
import { PrismaService } from '../../infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [StateController],
    providers: [StateRepositoryImpl, StateService, PrismaService],
    exports: [StateService]
})
export class StateModule {}
