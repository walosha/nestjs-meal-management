import { User } from '../models/users.model';
import { Permission_ } from '../models/permissions.model';

export default interface UserRepositoryInterface {
  all(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
  create(data: object): Promise<User>;
  findAllPermissions(Permission: Permission_): Promise<Permission_>;
}
