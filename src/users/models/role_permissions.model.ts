import { BaseModel } from '../../database/base.model';
import { IsInt, IsNotEmpty } from 'class-validator';
import { Role } from './roles.model';

export class Role_permission extends BaseModel {
  static tableName = 'role_permissions';

  @IsNotEmpty()
  name: string;

  @IsInt()
  permissionsId: number;

  @IsInt()
  rolesId: number;

  static relationMappings = {
    permissions: {
      modelClass: `${__dirname}/permissions.model`,
      relation: Role_permission.ManyToManyRelation,
      join: {
        from: 'role_permissions.id',
        through: {
          from: 'role_permissions.permissionsId',
          to: 'role_permissions.rolesId',
        },
        to: 'permissions.id',
      },
    },
    roles: {
      modelClass: `${__dirname}/roles.model`,
      relation: Role_permission.ManyToManyRelation,
      join: {
        from: 'role_permissions.id',
        through: {
          from: 'role_permissions.permissionsId',
          to: 'role_permissions.rolesId',
        },
        to: 'roles.id',
      },
    },
  };
}
