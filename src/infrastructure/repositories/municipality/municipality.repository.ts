import { Injectable } from "@nestjs/common";
import { Prisma, Municipality } from "@prisma/client";
import { PrismaService } from "../../services/prisma/prisma.service";
import { MunicipalityRepository } from "../../../domain/repositories/municipality/municipality.repository";
import { CreateMunicipalityDto } from "src/domain/model/municipality/create-municipality.dto";

@Injectable()
export class MunicipalityRepositoryImpl implements MunicipalityRepository {
    constructor(private prisma: PrismaService) {}
    async findAll(params?: Partial<CreateMunicipalityDto>): Promise<Municipality[]> {
        const where: Prisma.MunicipalityWhereInput = {}

        if(params) {
            where['name'] = params.name && params.name;
            where['state_id'] = params.stateId && +params.stateId;
        }

        return this.prisma.municipality.findMany({ where });
    }

    async create(data: Prisma.MunicipalityCreateInput): Promise<Municipality> {
        return this.prisma.municipality.create({ data })
    }


    async findById(id: number): Promise<Municipality | null> {
        return this.prisma.municipality.findUnique({ where: { id } })
    }

    async update(data: Prisma.MunicipalityUpdateInput): Promise<Municipality> {
        return this.prisma.municipality.update({ where: { id: 5 }, data })
    }

    async delete(id: number): Promise<void> {
        await this.prisma.municipality.delete({ where: { id } })
    }
    
}
