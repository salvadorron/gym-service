import { Injectable } from "@nestjs/common";
import { Prisma, Parrish } from "@prisma/client";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ParrishRepository } from "../../../domain/repositories/parrish/parrish.repository";

@Injectable()
export class ParrishRepositoryImpl implements ParrishRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: Parrish): Promise<Parrish> {
        return this.prisma.parrish.create({ data })
    }

    async findById(id: string): Promise<Parrish | null> {
        return this.prisma.parrish.findUnique({ where: { id: +id } })
    }

    async findByMunicipality(municipalityId: number): Promise<Parrish[]> {
        return this.prisma.parrish.findMany({ where: { municipality_id: municipalityId } })
    }

    async update(data: Parrish): Promise<Parrish> {
        return this.prisma.parrish.update({ where: { id: data.id }, data })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.parrish.delete({ where: { id: +id } })
    }

    async findAll(): Promise<Parrish[]> {
        return this.prisma.parrish.findMany()
    }
}
