import { BaseModel } from '../../database/base.model';
import { IsNotEmpty } from 'class-validator';

export class Role extends BaseModel {
  static tableName = 'roles';

  @IsNotEmpty()
  name: string;

  static get relationMappings() {
    const { Permission_ } = require('./role_permissions.model');
    return {
      movies: {
        relation: Role.ManyToManyRelation,
        modelClass: Permission_,
        join: {
          from: 'roles.id',
          // through: {
          //   from: 'role_permissions.permissionsId',
          //   to: 'role_permissions.roleId',
          // },
          to: 'permissions.id',
        },
      },
    };
  }
}
