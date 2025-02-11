import { Parrish } from 'prisma/prisma-client'
import { CreateParrishDto } from 'src/domain/model/parrish/create-parrish.dto';
export interface ParrishRepository {
  create(parrish: Parrish): Promise<Parrish>;
  findById(id: string): Promise<Parrish | null>;
  update(parrish: Parrish): Promise<Parrish>;
  delete(id: string): Promise<void>;
  findAll(params?: Partial<CreateParrishDto>): Promise<Parrish[]>;
}
