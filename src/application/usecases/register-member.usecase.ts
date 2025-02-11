import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { ClientService } from '../services/client/client.service';
import { RegisterMemberDto } from 'src/domain/model/user/register-member.dto';

@Injectable()
export class RegisterMemberUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly clientService: ClientService,
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
            role: { connect: { id: role_id } },
            state: {
                connect: { id: state_id }
            },
            municipality: {
                connect: { id: municipality_id }
            },
            parrish: {
                connect: { id: parrish_id }
            },
            trainer: role_id === 'trainer' ? { create: { speciality: specialty } } : undefined,
            client: role_id === 'client' ? {create: {}} : undefined
        });



        await this.clientService.save({ trainingProgress: 0, userId: user.getId()})
        return user
    }
}
