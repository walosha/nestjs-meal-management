import { BaseModel } from '../../database/base.model';
import { IsNotEmpty } from 'class-validator';

export class Objects extends BaseModel {
  static tableName = 'objects';

  @IsNotEmpty()
  name: string;
}
