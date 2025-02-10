import { Injectable } from "@nestjs/common";
import { Prisma, Municipality } from "@prisma/client";
import { PrismaService } from "../../services/prisma/prisma.service";
import { MunicipalityRepository } from "../../../domain/repositories/municipality/municipality.repository";

@Injectable()
export class MunicipalityRepositoryImpl implements MunicipalityRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.MunicipalityCreateInput): Promise<Municipality> {
        return this.prisma.municipality.create({ data })
    }

    async findAll(): Promise<Municipality[]> {
        return this.prisma.municipality.findMany()
    }

    async findById(id: number): Promise<Municipality | null> {
        return this.prisma.municipality.findUnique({ where: { id } })
    }

    findByState(stateId: number): Promise<Municipality[]> {
        return this.prisma.municipality.findMany({ where: { state_id: stateId } })
    }

    async update(data: Prisma.MunicipalityUpdateInput): Promise<Municipality> {
        return this.prisma.municipality.update({ where: { id: 5 }, data })
    }

    async delete(id: number): Promise<void> {
        await this.prisma.municipality.delete({ where: { id } })
    }
    
}
