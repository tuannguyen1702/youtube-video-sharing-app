import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login-register')
  loginOrRegister(@Body() user: User) {
    return this.usersService.loginOrRegister(user);
  }
}
