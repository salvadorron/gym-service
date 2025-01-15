import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from '../../domain/model/user/create-user.dto';
import { UserService } from '../services/user/user.service';
import { LoginUserUseCase } from '../usecases/login-user.usecase';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly loginUserUsecase: LoginUserUseCase
    ) {}


    @Get()
    async findAll(@Query('trainerId') trainerId?: number) {
        const users = await this.userService.getUsers(trainerId);
        return users.map(user => user.toSnapshot());
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
    async loginUser(@Body() loginUserDto: { username: string, password: string }) {
        const user = await this.loginUserUsecase.execute(loginUserDto);
        return user.toSnapshot();
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const newUser = await this.userService.save(createUserDto);
        return newUser.toSnapshot();
    }
}
