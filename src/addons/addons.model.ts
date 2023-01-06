import { BaseModel } from '../database/base.model';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  Min,
} from 'class-validator';

export class Addon extends BaseModel {
  static tableName = 'addons';

  @IsEmail()
  name: string;

  @IsInt()
  brandId: string;

  @IsNotEmpty()
  description: string;

  @IsNumberString()
  @Min(0)
  price: string;

  @IsNotEmpty()
  category: string;
}
