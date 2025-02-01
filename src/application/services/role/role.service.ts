import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CreateRoleDto } from 'src/domain/model/role/create-role.dto';
import { RoleRepositoryImpl } from 'src/infrastructure/repositories/role/role.repository';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepositoryImpl) {}

  async save(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleRepository.save(createRoleDto);
  }

  async getRoles(): Promise<Role[]> {
    return this.roleRepository.getRoles();
  }

  async getRoleById(id: string): Promise<Role> {
    return this.roleRepository.getRoleById(id);
  }
}
