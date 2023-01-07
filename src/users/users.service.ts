import * as bcrypt from 'bcrypt';
/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { User } from './users.model';
import { UserRole } from './role.enum';

@Injectable()
export class UsersService {
  constructor(@Inject(User) private readonly userModel: typeof User) {}

  private async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword;
  }

  async create(user: User): Promise<User> {
    try {
      const email = await this.userModel.query().findOne({ email: user.email });
      if (email) {
        throw new HttpException(
          'Email is associated with an existing account!',
          HttpStatus.CONFLICT,
        );
      }

      user.password = await this.hashPassword(user.password);
      user.roles = [UserRole.User];
      return await this.userModel.query().insertAndFetch(user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOnebyId(id: number) {
    const user = await this.userModel.query().findById(id);
    if (user) {
      throw new HttpException(
        'User is associated with an existing account!',
        HttpStatus.CONFLICT,
      );
    }

    return user;
  }

  async findOnebyEmail(email: string) {
    const user = await this.userModel.query().findOne({ email });
    if (user) {
      throw new HttpException(
        'User is associated with an existing account!',
        HttpStatus.CONFLICT,
      );
    }

    return user;
  }

  findAll(): Observable<User[]> {
    return from(this.userModel.query());
  }

  update() {}

  remove() {}
}
