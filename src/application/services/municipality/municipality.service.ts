import { Injectable } from '@nestjs/common';
import { Municipality } from '@prisma/client';
import { CreateMunicipalityDto } from 'src/domain/model/municipality/create-municipality.dto';
import { MunicipalityRepositoryImpl } from 'src/infrastructure/repositories/municipality/municipality.repository';

@Injectable()
export class MunicipalityService {
    constructor(private readonly municipalityRepository: MunicipalityRepositoryImpl) {}

    async save(createMunicipalityDto: CreateMunicipalityDto): Promise<Municipality> {
        return this.municipalityRepository.create({ name: createMunicipalityDto.name, state: { connect: { id: createMunicipalityDto.stateId } } });
    }

    async getMunicipalities(params?: Partial<CreateMunicipalityDto>): Promise<Municipality[]> {
        return this.municipalityRepository.findAll(params);
    }

    async getMunicipalityById(id: string): Promise<Municipality | null> {
        return this.municipalityRepository.findById(+id);
    }
}
