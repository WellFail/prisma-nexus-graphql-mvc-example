import { injectable, inject } from 'inversify';

import { IUserRepository } from '../IUserRepository';

import { User } from '../../domain/User';
import { UserMap } from '../../mappers/UserMap';
import { PrismaService } from '../../../../prisma-client';
import { TYPES } from '../../../../types';

@injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(
    @inject(TYPES.PrismaService) private readonly prisma: PrismaService,
  ) {
  }

  public async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => UserMap.toDomain(user));
  }

  public async createUser(user: User): Promise<User> {
    const persistenceUser = UserMap.toPersistence(user);
    const createdUser = await this.prisma.user.create({
      data: {
        ...persistenceUser,
        roles: { set: persistenceUser.roles },
      },
    });

    return UserMap.toDomain(createdUser);
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findOne({ where: { email } });
    if (!user) return null;

    return UserMap.toDomain(user);
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findOne({ where: { id } });
    if (!user) return null;

    return UserMap.toDomain(user);
  }
}
