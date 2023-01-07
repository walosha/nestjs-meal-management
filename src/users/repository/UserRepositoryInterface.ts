import { User } from '../users.model';

export default interface UserRepositoryInterface {
  all(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
  create(data: object): Promise<User>;
  findAllPermissions(user: User): Promise<User>;
}
