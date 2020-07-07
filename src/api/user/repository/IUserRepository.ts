import { User } from '../domain/User';

export interface IUserRepository {
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
}
