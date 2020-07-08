import repository from '../repository/prisma/PrismaUserRepository';
import { IUserRepository } from '../repository/IUserRepository';

import { User } from '../domain/User';
import { UserRole } from '../domain/UserRole';

export class UserService {
  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  public createUser({ email, password, firstName, lastName, middleName, roles }: CreateUserInterface) {
    const user = User.create({ email, password, firstName, lastName, middleName, roles });

    return this.userRepository.createUser(user);
  }

  public async getUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}

interface CreateUserInterface {
  email: string;
  password: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  roles: UserRole[];
}

export default new UserService(repository);
