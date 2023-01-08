import { BaseModel } from '../../database/base.model';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsStrongPassword,
  Length,
} from 'class-validator';
import { Role } from './roles.model';

export class User extends BaseModel {
  static tableName = 'users';

  @IsEmail()
  email: string;

  @Length(2, 25)
  @IsNotEmpty()
  firstName: string;

  @Length(2, 25)
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsInt()
  roles_id: Role;

  static get relationMappings() {
    const { Role } = require('./roles.model');
    return {
      roles: {
        modelClass: Role,
        relation: User.BelongsToOneRelation,
        join: {
          from: 'users.rolesId',
          through: {
            from: 'role_permissions.permissionsId',
            to: 'role_permissions.rolesId',
          },
          to: 'roles.id',
        },
      },
    };
  }
}
