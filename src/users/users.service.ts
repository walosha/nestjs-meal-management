import * as bcrypt from 'bcrypt';
/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { User } from './models/users.model';
import { UserRole } from './role.enum';
import UserRepository from './repository/KnexUserRepository';

@Injectable()
export class UsersService {
  constructor(
    @Inject(User) private readonly userModel: typeof User,
    private userRepository: UserRepository,
  ) {}

  private async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword;
  }

  async create(payload: any, role: any = UserRole.User): Promise<User> {
    try {
      const email = await this.userRepository.findByEmail(payload.email);
      if (email) {
        throw new HttpException(
          'Email is associated with an existing account!',
          HttpStatus.CONFLICT,
        );
      }

      payload.password = await this.hashPassword(payload.password);
      payload.roles_id = role;
      const user = await this.userRepository.create(payload);
      delete user.password;
      return user;
    } catch (error) {
      console.log({ error });
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOnebyId(id: number) {
    const user = await this.userRepository.findById(id);
    if (user) {
      throw new HttpException(
        'User is associated with an existing account!',
        HttpStatus.CONFLICT,
      );
    }

    return user;
  }

  async findOnebyEmail(email: string): Promise<User> {
    return await this.userRepository.findByEmail(email);
  }

  findAll(): Observable<User[]> {
    return from(this.userModel.query());
  }

  update() {}

  remove() {}
}
