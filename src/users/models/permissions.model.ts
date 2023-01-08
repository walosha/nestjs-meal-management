import { BaseModel } from '../../database/base.model';
import { IsInt, IsNotEmpty } from 'class-validator';

export class Permission_ extends BaseModel {
  static tableName = 'permissions';

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  action: string;

  @IsInt()
  ObjectId: number;

  static get relationMappings() {
    const { Objects } = require('./objects.model ');
    return {
      objects: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: Objects,
        join: {
          from: 'permissions.id',
          // through: {
          //   from: 'role_permissions.permissionsId',
          //   to: 'role_permissions.roleId',
          // },
          to: 'objects.id',
        },
      },
    };
  }
}
