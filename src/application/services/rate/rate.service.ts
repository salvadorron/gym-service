import { Injectable } from "@nestjs/common";
import { Prisma, Rate } from "@prisma/client"
import { RateRepositoryImpl } from "src/infrastructure/repositories/rate/rate.repository";

@Injectable()
export class RateService {
    constructor(private rateRepository: RateRepositoryImpl) {}
    async save(data: Prisma.RateCreateInput): Promise<Rate> {
        const prismaRate = await this.rateRepository.save(data);
        return prismaRate;
    }
    async getRates(): Promise<Rate[]> {
        const rates = await this.rateRepository.getRates();
        return rates;
    }
    async getRateById(id: string): Promise<Rate> {
        const rate = await this.rateRepository.getRateById(+id);
        return rate;
    }

}