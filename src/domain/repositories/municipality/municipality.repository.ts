import { Prisma, Municipality } from "@prisma/client";
import { CreateMunicipalityDto } from "../../../domain/model/municipality/create-municipality.dto";

export interface MunicipalityRepository {
    create(data: Prisma.MunicipalityCreateInput): Promise<Municipality>
    findAll(params?: Partial<CreateMunicipalityDto>): Promise<Municipality[]>
    findById(id: number): Promise<Municipality | null>
    update(data: Prisma.MunicipalityUpdateInput): Promise<Municipality>
    delete(id: number): Promise<void>
}
