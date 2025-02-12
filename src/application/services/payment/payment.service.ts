import { Injectable } from '@nestjs/common';
import { Payment } from '@prisma/client';
import { CreatePaymentDto } from 'src/domain/model/payment/create-payment.dto';
import { PaymentRepositoryImpl } from 'src/infrastructure/repositories/payment/payment.repository';

@Injectable()
export class PaymentService {
  constructor(private paymentRepository: PaymentRepositoryImpl) {}

  async save(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const prismaPayment = await this.paymentRepository.save({
      amount: createPaymentDto.amount,
      description: createPaymentDto.description,
      method: createPaymentDto.method,
      startDate: new Date(),
      endDate: new Date(),
      status: 'activo',
      client: {
        connect: {
          id: createPaymentDto.clientId,
        },
      },
    });
    return prismaPayment;
  }
  async getPayments(): Promise<Payment[]> {
    const prismaPayments = await this.paymentRepository.getPayments();
    return prismaPayments;
  }
  async getPaymentById(id: string): Promise<Payment> {
    const prismaPayment = await this.paymentRepository.getPaymentById(+id);
    return prismaPayment;
  }
}
