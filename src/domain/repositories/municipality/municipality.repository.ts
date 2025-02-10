import { Prisma, Municipality } from "@prisma/client";

export interface MunicipalityRepository {
    create(data: Prisma.MunicipalityCreateInput): Promise<Municipality>
    findAll(): Promise<Municipality[]>
    findById(id: number): Promise<Municipality | null>
    findByState(stateId: number): Promise<Municipality[]>
    update(data: Prisma.MunicipalityUpdateInput): Promise<Municipality>
    delete(id: number): Promise<void>
}
