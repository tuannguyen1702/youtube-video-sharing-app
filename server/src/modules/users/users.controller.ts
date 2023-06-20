import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { JwtAuthGuard } from './jwt/jwt.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login-register')
  loginOrRegister(@Body() user: User) {
    return this.usersService.loginOrRegister(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getUserProfile(@Request() req: any) {
    const { user } = req;

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
