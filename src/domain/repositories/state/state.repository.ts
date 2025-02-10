import { State } from 'prisma/prisma-client'
export interface StateRepository {
  create(state: State): Promise<State>;
  findById(id: string): Promise<State | null>;
  update(state: State): Promise<State>;
  delete(id: string): Promise<void>;
  findAll(): Promise<State[]>;
}
