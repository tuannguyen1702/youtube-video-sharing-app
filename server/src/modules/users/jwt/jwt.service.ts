import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../users.service';
import { User } from '../users.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key',
    });
  }

  async validate(payload: User) {
    const { email } = payload;

    if (email) {
      const user = await this.usersService.findByEmail(email);
      if (user) return user.safeResponse();
    }

    throw new UnauthorizedException();
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
