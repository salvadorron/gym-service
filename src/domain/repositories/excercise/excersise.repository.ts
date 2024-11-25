import { Excersise, Prisma } from "@prisma/client"

export interface ExcersiseRepository {
    save(data: Prisma.ExcersiseCreateInput): Promise<Excersise>
    getExcersises(): Promise<Excersise[]>
    getExcersiseById(id: number): Promise<Excersise>
}