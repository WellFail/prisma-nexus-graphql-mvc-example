import prisma from '../../../../prisma-client';

import { IUserRepository } from '../IUserRepository';

import { User } from '../../domain/User';
import { UserMap } from '../../mappers/UserMap';

export class PrismaUserRepository implements IUserRepository {
  public async getAllUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users.map((user) => UserMap.toDomain(user));
  }

  public async createUser(user: User): Promise<User> {
    const persistenceUser = UserMap.toPersistence(user);
    const createdUser = await prisma.user.create({
      data: {
        ...persistenceUser,
        roles: { set: persistenceUser.roles },
      },
    });

    return UserMap.toDomain(createdUser);
  }
}

export default new PrismaUserRepository();
