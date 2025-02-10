import { Parrish } from 'prisma/prisma-client'
export interface ParrishRepository {
  create(parrish: Parrish): Promise<Parrish>;
  findById(id: string): Promise<Parrish | null>;
  findByMunicipality(municipalityId: number): Promise<Parrish[]>;
  update(parrish: Parrish): Promise<Parrish>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Parrish[]>;
}
