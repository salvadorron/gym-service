import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, Rate } from "@prisma/client"
import { RateRepository } from "src/domain/repositories/rate/rate.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class RateRepositoryImpl implements RateRepository {
    constructor(private prisma: PrismaService) {}
    async save(data: Prisma.RateCreateInput): Promise<Rate> {
        const prismaRate = await this.prisma.rate.create({ data });
        return prismaRate;
    }
    async getRates(): Promise<Rate[]> {
        const rates = await this.prisma.rate.findMany();
        return rates;
    }
    async getRateById(id: number): Promise<Rate> {
        const rate = await this.prisma.rate.findFirst();
        if(!rate) throw new HttpException('Rate not found', 404);
        return rate;
    }

}