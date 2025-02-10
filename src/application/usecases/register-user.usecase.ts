import { Injectable } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { ClientService } from '../services/client/client.service';
import { RegisterUserClientDto } from 'src/domain/model/client/register-userclient.dto';

@Injectable()
export class RegisterUserClientUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly clientService: ClientService,
  ) {}

    async execute({ state_id, municipality_id, parrish_id, username, password, age, last_name, name, weigth, heigth, city, zip_code, address, specialty }: RegisterUserClientDto) {
        const user = await this.userService.save({
            username, password, age, last_name, name, weigth: +weigth, heigth: +heigth, city, zip_code, address, specialty,
            role: { connectOrCreate: { where: { id: 'client' }, create: { id: 'client', name: 'Cliente' } } },
            state: {
                connect: {id: +state_id}
            },
            municipality: {
                connect: {id: +municipality_id}
            },
            parrish: {
                connect: {id: +parrish_id}
            }
        });
        await this.clientService.save({ trainingProgress: 0, userId: user.getId()})
        return user
    }
}
