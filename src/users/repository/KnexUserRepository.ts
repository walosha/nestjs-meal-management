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

  async findAllPermissions(user: any): Promise<any> {
    return this.UserModel.query()
      .select('users.id', 'pr:pr.name as grandParentName')
      .leftJoinRelated('[role_permissions, roles.[b, c]]', {
        aliases: {
          users: 'pr',
          roles: 'pt',
        },
      })
      .where('pr:pt.id', user.id);
  }
}
