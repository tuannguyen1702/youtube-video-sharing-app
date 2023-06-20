import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { MongoRepository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async loginOrRegister(user: User): Promise<any> {
    const { email, password } = user;

    if (!email || !password) {
      throw new HttpException(
        'Email/password is required.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const userData = await this.findByEmail(email);

    const data: any = {
      isNewUser: true,
    };

    if (userData) {
      if (await bcrypt.compare(password, userData.password)) {
        data.isNewUser = false;
        data.email = userData.email;
      } else {
        throw new HttpException(
          'Wrong user or password',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      const entity = Object.assign(new User(), user);
      const newUser = await this.userRepository.save(entity);
      data.isNewUser = true;
      data.email = newUser.email;
    }

    const token = this.jwtService.sign({ email: user.email });
    return { ...data, token };
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }
}
