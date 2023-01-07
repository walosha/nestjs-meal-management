import { BaseModel } from '../database/base.model';
import { IsNotEmpty } from 'class-validator';

export class Role extends BaseModel {
  static tableName = 'roles';

  @IsNotEmpty()
  name: string;
}
