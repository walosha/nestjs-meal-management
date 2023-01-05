/* eslint-disable @typescript-eslint/no-empty-function */
import { Inject, Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@Inject(User) private readonly userModel: typeof User) {}

  create(user: User): Observable<User> {
    return from(this.userModel.query().insertAndFetch(user));
  }

  findOne() {}

  findAll(): Observable<User[]> {
    return from(this.userModel.query());
  }

  update() {}

  remove() {}
}
