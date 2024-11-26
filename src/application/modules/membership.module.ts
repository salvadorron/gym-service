import { Module } from '@nestjs/common';
import { MembershipController } from '../controllers/membership.controller';
import { MembershipRepositoryImpl } from 'src/infrastructure/repositories/membership/membership.repository';
import { MembershipService } from '../services/membership/membership.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [MembershipController],
    providers: [MembershipRepositoryImpl, MembershipService, PrismaService],
    exports: [MembershipService]
})
export class MembershipModule {}
