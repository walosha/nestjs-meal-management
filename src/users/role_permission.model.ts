import { BaseModel } from '../database/base.model';
import { IsInt, IsNotEmpty } from 'class-validator';
import { UserRole } from './role.enum';

export class Role_permission extends BaseModel {
  static tableName = 'roles';

  @IsNotEmpty()
  name: string;

  @IsInt()
  permissionId: number;

  @IsInt()
  rolesId: number;

  static relationMappings = {
    role_permissions: {
      modelClass: `${__dirname}/permission.model`,
      relation: Role_permission.BelongsToOneRelation,
      join: {
        from: 'role_permission.id',
        to: 'permissions.id',
      },
    },
  };
}
