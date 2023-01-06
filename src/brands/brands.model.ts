import { BaseModel } from '../database/base.model';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class Brand extends BaseModel {
  static tableName = 'brand';

  @Length(2, 25)
  name: string;
}
