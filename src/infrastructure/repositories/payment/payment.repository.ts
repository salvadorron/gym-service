import { HttpException, Injectable } from "@nestjs/common";
import { Day, Payment, Prisma } from "@prisma/client"
import { PaymentRepository } from "../../../domain/repositories/payment/payment.repository";
import { PrismaService } from "../../../infrastructure/services/prisma/prisma.service";

@Injectable()
export class PaymentRepositoryImpl implements PaymentRepository {
    constructor(private prisma: PrismaService) {}
    async save(data: Prisma.PaymentCreateInput): Promise<Payment> {
        const prismaPayment = await this.prisma.payment.create({ data });
        return prismaPayment;
    }
    async getPayments(): Promise<Payment[]> {
        const prismaPayments = await this.prisma.payment.findMany();
        return prismaPayments;
    }
    async getPaymentById(id: number): Promise<Payment> {
        const prismaPayment = await this.prisma.payment.findFirst({ where: { id } });
        if(!prismaPayment) throw new HttpException('Payment not found', 404);
        return prismaPayment
    }

}