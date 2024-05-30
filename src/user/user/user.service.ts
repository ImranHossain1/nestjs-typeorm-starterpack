import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';
import { IUser } from '../models/user.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  add(user: IUser): Observable<IUser> {
    return from(this.userRepository.save(user));
  }
  findAll(): Observable<IUser[]> {
    return from(this.userRepository.find());
  }
}
