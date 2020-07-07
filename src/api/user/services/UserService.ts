// import { PrismaUserRepository } from './repository/prisma/PrismaUserRepository';

import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../domain/User';

export class UserService {
  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  public createUser({ email, password, firstName }: CreateUserInterface) {
    const user = User.create({ email, password, firstName });

    return this.userRepository.createUser(user);
  }

  public async getUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}

interface CreateUserInterface {
  email: string;
  password: string;
  firstName: string;
}
