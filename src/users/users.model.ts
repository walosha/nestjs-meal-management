import { BaseModel } from '../database/base.model';

export class User extends BaseModel {
  static tableName = 'users';

  email: string;
  firstName: string;
  lastname: string;
}
