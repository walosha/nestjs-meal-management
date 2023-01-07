import { UserRole } from './role.enum';
import { BaseModel } from 'src/database/base.model';

export class UserDto extends BaseModel {
  id!: number;
  roles!: UserRole[];
  email: string;
  firstName: string;
  lastName: string;
  password!: string;
}
