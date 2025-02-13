import { Body, Controller, Delete, Get, Header, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from '../../domain/model/user/create-user.dto';
import { UserService } from '../services/user/user.service';
import { LoginUserUseCase } from '../usecases/login-user.usecase';
import { RegisterMemberDto } from '../../domain/model/user/register-member.dto';
import { RegisterMemberUseCase } from '../usecases/register-member.usecase';
import { UpdateMemberUseCase } from '../usecases/update-member.usecase';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly loginUserUsecase: LoginUserUseCase,
    private readonly registerMemberUsecase: RegisterMemberUseCase,
    private readonly updateMemberUsecase: UpdateMemberUseCase
  ) {}

  @Get()
  async findAll(@Query() params?: {trainerId?: number, roleId?: string}) {
    const users = await this.userService.getUsers(params);
    return users.map((user) => user.toSnapshot());
  }

  @Get('by-username/:username')
  async findByUsername(@Param('username') username: string) {
    const user = await this.userService.getUserByUsername(username);
    return user.toSnapshot();
  }

  @Post('register-member')
  async registerMember(
    @Body() props: RegisterMemberDto
  ) {
    const member = await this.registerMemberUsecase.execute(props);
    return member.toSnapshot()
  }

  @Patch('update-member/:id')
  async updateMember(
     @Param('id') id: string,
     @Body() props: Partial<RegisterMemberDto>
  ) {
    const member = await this.updateMemberUsecase.execute(props, +id);
    return member.toSnapshot();
  }

  @Delete('delete-member/:id')
  async deleteMember(
    @Param('id') id: string
  ) {
    const deletedMember = await this.userService.delete(+id)
    return deletedMember
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
            age: createUserDto.age, 
            city: createUserDto.city,
            height: +createUserDto.height,
            last_name: createUserDto.last_name, name: createUserDto.name,
            medical_conditions: createUserDto.medical_conditions,
            state: {connect: {id: +createUserDto.state_id}},
            municipality: {connect: {id: +createUserDto.municipality_id}},
            parrish: {connect: {id: +createUserDto.parrish_id}},
            role: { connect: { id: createUserDto.role_id } },
            password: createUserDto.password,
            username: createUserDto.username,
            weight: +createUserDto.weight,
            zip_code: createUserDto.zip_code,
            
        });
        return newUser.toSnapshot();
    }
}
