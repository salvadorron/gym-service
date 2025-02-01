import { Injectable } from '@nestjs/common';
import { Excersise } from '@prisma/client';
import { CreateExcersiseDto } from 'src/domain/model/excersise/create-excercise.dto';
import { ExcersiseRepositoryImpl } from 'src/infrastructure/repositories/excercise/excersise.repository';

@Injectable()
export class ExcersiseService {
  constructor(private excersiseRepository: ExcersiseRepositoryImpl) {}

  async save(createExcersiseDto: CreateExcersiseDto): Promise<Excersise> {
    const prismaExcersise = await this.excersiseRepository.save({
      name: createExcersiseDto.name,
      description: createExcersiseDto.description,
      repeats: createExcersiseDto.repeats,
      series: createExcersiseDto.series,
      trainings: { connect: { id: createExcersiseDto.trainingId } },
    });
    return prismaExcersise;
  }
  async getExcersises(): Promise<Excersise[]> {
    const prismaExcersises = await this.excersiseRepository.getExcersises();
    return prismaExcersises;
  }
  async getExcersiseById(id: string): Promise<Excersise> {
    const prismaExcersise =
      await this.excersiseRepository.getExcersiseById(+id);
    return prismaExcersise;
  }
}
