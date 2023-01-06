import { BaseModel } from '../database/base.model';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class User extends BaseModel {
  static tableName = 'users';

  @IsEmail()
  email: string;

  @Length(2, 25)
  firstName: string;

  @Length(2, 25)
  lastName: string;
}
