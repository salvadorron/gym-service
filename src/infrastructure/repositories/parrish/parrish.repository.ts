import { Injectable } from "@nestjs/common";
import { Prisma, Parrish } from "@prisma/client";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ParrishRepository } from "../../../domain/repositories/parrish/parrish.repository";
import { CreateParrishDto } from "src/domain/model/parrish/create-parrish.dto";

@Injectable()
export class ParrishRepositoryImpl implements ParrishRepository {
    constructor(private prisma: PrismaService) {}
    async findAll(params?: Partial<CreateParrishDto>): Promise<Parrish[]> {
        const where: Prisma.ParrishWhereInput = {}

        if(params) {
            where['id'] = params.id && +params.id;
            where['name'] = params.name && params.name;
            where['municipality_id'] = params.municipalityId && +params.municipalityId;
        }

        return this.prisma.parrish.findMany({ where })
    }


    async create(data: Parrish): Promise<Parrish> {
        return this.prisma.parrish.create({ data })
    }

    async findById(id: string): Promise<Parrish | null> {
        return this.prisma.parrish.findUnique({ where: { id: +id } })
    }

    async update(data: Parrish): Promise<Parrish> {
        return this.prisma.parrish.update({ where: { id: data.id }, data })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.parrish.delete({ where: { id: +id } })
    }

  
}
