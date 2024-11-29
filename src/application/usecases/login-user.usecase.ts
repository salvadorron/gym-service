import { HttpException, Injectable } from "@nestjs/common";
import { UserService } from "../services/user/user.service";
import { BcryptService } from "src/infrastructure/services/bcrypt/bcrypt.service";

@Injectable()
export class LoginUserUseCase {
     
    constructor(
        private readonly userService: UserService,
        private readonly brcryptService: BcryptService
    ){}

    async execute({ username, password }: { username: string, password: string }) {
        const user = await this.userService.getUserByUsername(username);
        const isValid = await this.brcryptService.compare(password, user.getHashedPassword())
        if(!isValid) throw new HttpException('Invalid credentials', 401);
        return user
    }
}