import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { RegisterMemberDto } from '../../domain/model/user/register-member.dto';

@Injectable()
export class UpdateMemberUseCase {
  constructor(
    private readonly userService: UserService,
  ) {}

    async execute({ state_id, municipality_id, parrish_id, username, password, gender, age, last_name, name, weight, height, city, zip_code, address, medical_conditions, role_id, specialty }: Partial<RegisterMemberDto>, id: number) {

        
        const user = await this.userService.update({
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
        }, id);


        return user
    }
}
