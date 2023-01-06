import { BaseModel } from 'src/database/base.model';

export class CreateAddonDto extends BaseModel {
  name: string;
  description: string;
  price: string;
  category: string;
}
