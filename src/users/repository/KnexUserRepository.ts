import { Inject } from '@nestjs/common';
import { User } from '../models/users.model';
import UserRepositoryInterface from './UserRepositoryInterface';
import { Permission_ } from '../models/permissions.model';
import { Role_permission } from '../models/role_permissions.model';

export default class UserRepository implements UserRepositoryInterface {
  constructor(
    @Inject(User) private readonly UserModel: typeof User,
    @Inject(Permission_) private readonly PemissionModel: typeof Permission_,
    @Inject(Role_permission)
    private readonly role_permission: typeof Role_permission,
  ) {}

  async all(): Promise<User[]> {
    return this.UserModel.query();
  }

  async findById(id: number): Promise<User> {
    return await this.UserModel.query().where('id', id).first();
  }

  async findByEmail(email: string): Promise<User> {
    return await this.UserModel.query().where('email', email).first();
  }
  async create(data: object): Promise<User> {
    return await this.UserModel.query().insert(data);
  }

  async findAllPermissions(user: any): Promise<any> {
    return this.role_permission
      .query()
      .where('role_permissions.rolesId', user.rolesId)
      .select('role_permissions.*', 'permissions.*')
      .join(
        'permissions',
        'role_permissions.permissionsId',
        '=',
        'permissions.id',
      );
  }
}
