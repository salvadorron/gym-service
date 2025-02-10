import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from '../../domain/model/user/create-user.dto';
import { UserService } from '../services/user/user.service';
import { LoginUserUseCase } from '../usecases/login-user.usecase';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly loginUserUsecase: LoginUserUseCase,
  ) {}

  @Get()
  async findAll(@Query('trainerId') trainerId?: number) {
    const users = await this.userService.getUsers(trainerId);
    return users.map((user) => user.toSnapshot());
  }

  @Get('by-username/:username')
  async findByUsername(@Param('username') username: string) {
    const user = await this.userService.getUserByUsername(username);
    return user.toSnapshot();
  }

  @Get('by-id/:id')
  async findById(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);
    return user.toSnapshot();
  }

  @Post('login')
  async loginUser(
    @Body() loginUserDto: { username: string; password: string },
  ) {
    const user = await this.loginUserUsecase.execute(loginUserDto);
    return user.toSnapshot();
  }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const newUser = await this.userService.save({
            address: createUserDto.address,
            age: createUserDto.age, city: createUserDto.city, heigth: +createUserDto.heigth,
            last_name: createUserDto.last_name, name: createUserDto.name,
            medical_conditions: createUserDto.medical_conditions,
            state: {connect: {id: +createUserDto.state_id}},
            municipality: {connect: {id: +createUserDto.municipality_id}},
            parrish: {connect: {id: +createUserDto.parrish_id}},
            role: { connect: { id: createUserDto.role_id } },
            password: createUserDto.password,
            username: createUserDto.username,
            specialty: createUserDto.specialty,
            weigth: +createUserDto.weigth,
            zip_code: createUserDto.zip_code,
            
        });
        return newUser.toSnapshot();
    }
}
