import { Prisma, Rate } from "@prisma/client"

export interface RateRepository {
    save(data: Prisma.RateCreateInput): Promise<Rate>
    getRates(): Promise<Rate[]>
    getRateById(id: number): Promise<Rate>
}