import { Injectable } from '@nestjs/common';
import { State } from '@prisma/client';
import { CreateStateDto } from '../../../domain/model/state/create-state.dto';
import { StateRepositoryImpl } from '../../../infrastructure/repositories/state/state.repository';

@Injectable()
export class StateService {
    constructor(private readonly stateRepository: StateRepositoryImpl) {}

    async save(createStateDto: CreateStateDto): Promise<State> {
        return this.stateRepository.create(createStateDto);
    }

    async getStates(): Promise<State[]> {
        return this.stateRepository.findAll();
    }

    async getStateById(id: string): Promise<State | null> {
        return this.stateRepository.findById(id);
    }

}
