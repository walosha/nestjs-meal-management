import { Expose } from 'class-transformer';
import { BaseModel } from '../database/base.model';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  Min,
} from 'class-validator';

export class Addon extends BaseModel {
  static tableName = 'addons';

  @IsNotEmpty()
  name: string;

  @IsInt()
  brandId: number;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  price: string;

  @IsNotEmpty()
  category: string;
}
