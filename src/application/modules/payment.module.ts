import { Module } from '@nestjs/common';
import { PaymentController } from '../controllers/payment.controller';
import { PaymentRepositoryImpl } from 'src/infrastructure/repositories/payment/payment.repository';
import { PaymentService } from '../services/payment/payment.service';
import { PrismaService } from 'src/infrastructure/services/prisma/prisma.service';

@Module({
    controllers: [PaymentController],
    providers: [PaymentRepositoryImpl, PaymentService, PrismaService],
    exports: [PaymentService]
})
export class PaymentModule {}
