/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@Inject(User) private readonly userModel: typeof User) {}

  async create(user: User): Promise<User> {
    const email = await this.userModel.query().findOne({ email: user.email });
    if (email) {
      throw new HttpException(
        'Email is associated with an existing account!',
        HttpStatus.CONFLICT,
      );
    }

    return await this.userModel.query().insertAndFetch(user);
  }

  findOne() {}

  findAll(): Observable<User[]> {
    return from(this.userModel.query());
  }

  update() {}

  remove() {}
}
