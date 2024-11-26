import { HttpException, Injectable } from "@nestjs/common";
import { Admin } from "@prisma/client";
import { UserService } from "../user/user.service";
import { AdminRepositoryImpl } from "src/infrastructure/repositories/admin/admin.repository";
import { CreateAdminDto } from "src/domain/model/admin/create-admin.dto";

@Injectable()
export class AdminService {
    constructor(
        private adminRepository: AdminRepositoryImpl,
        private userService: UserService
    ) {}


    async save(data: CreateAdminDto): Promise<Admin> {
        const user = await this.userService.getUserById(data.userId.toString());
        if(!user) throw new HttpException('User not found', 404);
        return this.adminRepository.save({ user: { connect: { id: data.userId } } }); 
    }

    async getAdmins(): Promise<Admin[]> {
        return this.adminRepository.getAdmins();
    }

    async getAdminById(id: string): Promise<Admin> {
        return this.adminRepository.getAdminById(+id);
    } 

}