import { Payment, Prisma } from "@prisma/client"

export interface PaymentRepository {
    save(data: Prisma.PaymentCreateInput): Promise<Payment>
    getPayments(): Promise<Payment[]>
    getPaymentById(id: number): Promise<Payment>
}