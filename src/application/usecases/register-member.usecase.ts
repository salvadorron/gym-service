import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { ClientService } from '../services/client/client.service';
import { RegisterMemberDto } from 'src/domain/model/user/register-member.dto';
import { TrainerService } from '../services/trainer/trainer.service';
import { AdminService } from '../services/admin/admin.service';

@Injectable()
export class RegisterMemberUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly clientService: ClientService,
    private readonly trainerService: TrainerService,
    private readonly adminService: AdminService
  ) {}

    async execute({ state_id, municipality_id, parrish_id, username, password, gender, age, last_name, name, weight, height, city, zip_code, address, medical_conditions, role_id, specialty }: RegisterMemberDto) {

        
        const user = await this.userService.save({
            username,
            password, 
            age, 
            last_name, 
            name, 
            weight, 
            height, 
            city, 
            zip_code, 
            address,
            medical_conditions,
            gender,
            role: { connectOrCreate: { where: { id: role_id }, create: { id: role_id, name: role_id } } },
            state: {
                connect: { id: state_id }
            },
            municipality: {
                connect: { id: municipality_id }
            },
            parrish: {
                connect: { id: parrish_id }
            },
        });


        if(role_id === 'client') {
            await this.clientService.save({ trainingProgress: 0, userId: user.getId()})
        } else if(role_id === 'trainer') {
            await this.trainerService.save({speciality: specialty, userId: user.getId(), certificates: []})
        } else if(role_id === 'admin') {
            await this.adminService.save({ userId: user.getId() })
        }



        return user
    }
}
