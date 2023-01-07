import { BaseModel } from '../database/base.model';
import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
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

  static relationMappings = {
    roles: {
      modelClass: `${__dirname}/roles.model`,
      relation: User.BelongsToOneRelation,
      join: {
        from: 'user.id',
        to: 'roles.id',
      },
    },
    role_permissions: {
      modelClass: `${__dirname}/role_permission.model`,
      relation: User.BelongsToOneRelation,
      join: {
        from: 'user.id',
        to: 'role_permissions.id',
      },
    },
  };
}
