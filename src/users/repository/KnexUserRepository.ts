import { Inject } from '@nestjs/common';
import { User } from '../users.model';
import UserRepositoryInterface from './UserRepositoryInterface';

export default class UserRepository implements UserRepositoryInterface {
  constructor(@Inject(User) private readonly UserModel: typeof User) {}

  async all(): Promise<User[]> {
    return this.UserModel.query();
  }

  async findById(id: number): Promise<User> {
    return this.UserModel.query().where('id', id).first();
  }

  async findByEmail(email: string): Promise<User> {
    return this.UserModel.query().where('email', email).first();
  }
  async create(data: object): Promise<User> {
    return this.UserModel.query().insert(data);
  }
}
