import { CanActivate, Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class WsGuard implements CanActivate {
  constructor(private userService: UsersService) {}

  async canActivate(context: any): Promise<boolean> {
    try {
      const bearerToken =
        context.args[0].handshake.headers?.authorization.split(' ')[1];
      const decoded = jwt.verify(bearerToken, 'your-secret-key') as any;
      const user = await this.userService.findByEmail(decoded.email);
      context.args[0].handshake.user = user;
      return user ? true : false;
    } catch (ex) {
      return false;
    }
  }
}
