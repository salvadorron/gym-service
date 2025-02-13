import { Injectable } from '@nestjs/common';
import { Parrish } from '@prisma/client';
import { CreateParrishDto } from '../../../domain/model/parrish/create-parrish.dto';
import { ParrishRepositoryImpl } from 'src/infrastructure/repositories/parrish/parrish.repository';

@Injectable()
export class ParrishService {
    constructor(private readonly parrishRepository: ParrishRepositoryImpl) {}

    async save(createParrishDto: CreateParrishDto): Promise<Parrish> {
        return this.parrishRepository.create({ name: createParrishDto.name, municipality_id: +createParrishDto.municipalityId, id: +createParrishDto.id });
    }

    async getParrishes(params?: Partial<CreateParrishDto>): Promise<Parrish[]> {
        return this.parrishRepository.findAll(params);
    }

    async getParrishById(id: string): Promise<Parrish | null> {
        return this.parrishRepository.findById(id);
    }
}
