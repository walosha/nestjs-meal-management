import { BaseModel } from '../database/base.model';
import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';
import { UserRole } from './role.enum';

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

  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  roles: UserRole[];
}
