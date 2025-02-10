import { HttpException, Injectable } from "@nestjs/common";
import { Excersise, Prisma } from "@prisma/client"
import { ExcersiseRepository } from "../../../domain/repositories/excercise/excersise.repository";
import { PrismaService } from "../../../infrastructure/services/prisma/prisma.service";

@Injectable()
export class ExcersiseRepositoryImpl implements ExcersiseRepository {
    constructor(private prisma: PrismaService) {}
    async update(data: Prisma.ExcersiseUpdateInput, id: number): Promise<Excersise> {
        const prismaExcercise = await this.prisma.excersise.update({ data, where: { id } });
        return prismaExcercise;
    }
    
    async save(data: Prisma.ExcersiseCreateInput): Promise<Excersise> {
        const prismaExcersise = await this.prisma.excersise.create({ data });
        return prismaExcersise;
    }
    async getExcersises(): Promise<Excersise[]> {
        const prismaExcersises = await this.prisma.excersise.findMany();
        return prismaExcersises;
    }
    async getExcersiseById(id: number): Promise<Excersise> {
        const prismaExcersise = await this.prisma.excersise.findUnique({ where: { id } });
        if(!prismaExcersise) throw new HttpException('Excersise not found', 404);
        return prismaExcersise;
    }
}