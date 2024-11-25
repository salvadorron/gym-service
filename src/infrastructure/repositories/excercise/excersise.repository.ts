import { Injectable } from "@nestjs/common";
import { Excersise, Prisma } from "@prisma/client"
import { ExcersiseRepository } from "src/domain/repositories/excercise/excersise.repository";
import { PrismaService } from "src/infrastructure/services/prisma/prisma.service";

@Injectable()
export class ExcersiseImpl implements ExcersiseRepository {
    constructor(private prisma: PrismaService) {}
    
    save(data: Prisma.ExcersiseCreateInput): Promise<Excersise> {
        throw new Error("Method not implemented.");
    }
    getExcersises(): Promise<Excersise[]> {
        throw new Error("Method not implemented.");
    }
    getExcersiseById(id: number): Promise<Excersise> {
        throw new Error("Method not implemented.");
    }
    


}