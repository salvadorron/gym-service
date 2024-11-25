import { Injectable } from "@nestjs/common";
import { Prisma, Rate } from "@prisma/client"
import { RateRepository } from "src/domain/repositories/rate/rate.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class RateRepositoryImpl implements RateRepository {
    constructor(private prisma: PrismaService) {}
    save(data: Prisma.RateCreateInput): Promise<Rate> {
        throw new Error("Method not implemented.");
    }
    getRates(): Promise<Rate[]> {
        throw new Error("Method not implemented.");
    }
    getRateById(id: number): Promise<Rate> {
        throw new Error("Method not implemented.");
    }

}