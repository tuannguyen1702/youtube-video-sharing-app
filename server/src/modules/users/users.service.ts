import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}
  create(user: User): Promise<User> {
    const entity = Object.assign(new User(), user);
    return this.userRepository.save(entity);
  }

  findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { email: username } });
  }
}
