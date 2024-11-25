import { Injectable } from "@nestjs/common";
import { Day, Payment, Prisma } from "@prisma/client"
import { PaymentRepository } from "src/domain/repositories/payment/payment.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class PaymentRepositoryImpl implements PaymentRepository {
    constructor(private prisma: PrismaService) {}
    save(data: Prisma.PaymentCreateInput): Promise<Payment> {
        throw new Error("Method not implemented.");
    }
    getPayments(): Promise<Payment[]> {
        throw new Error("Method not implemented.");
    }
    getPaymentById(id: number): Promise<Payment> {
        throw new Error("Method not implemented.");
    }

}