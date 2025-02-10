import { Injectable } from "@nestjs/common";
import { Prisma, State } from "@prisma/client";
import { PrismaService } from "../../services/prisma/prisma.service";
import { StateRepository } from "../../../domain/repositories/state/state.repository";

@Injectable()
export class StateRepositoryImpl implements StateRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.StateCreateInput): Promise<State> {
        return this.prisma.state.create({ data })
    }

    async findAll(): Promise<State[]> {
        return this.prisma.state.findMany({include: {municipalities: {include: {parrishes: true}}}})
    }

    async findById(id: string): Promise<State | null> {
        return this.prisma.state.findUnique({ where: { id: +id } })
    }

    async update(data: Prisma.StateUpdateInput): Promise<State> {
        return this.prisma.state.update({ where: { id: 5 }, data })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.state.delete({ where: { id: +id } })
    }
}


