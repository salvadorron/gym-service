import { Excersise, Prisma } from '@prisma/client';

export interface ExcersiseRepository {
    save(data: Prisma.ExcersiseCreateInput): Promise<Excersise>
    update(data: Prisma.ExcersiseUpdateInput, id: number): Promise<Excersise>
    getExcersises(): Promise<Excersise[]>
    getExcersiseById(id: number): Promise<Excersise>
}