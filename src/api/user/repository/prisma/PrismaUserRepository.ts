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
    const createdUser = await prisma.user.create({
      data: UserMap.toPersistence(user),
    });

    return UserMap.toDomain(createdUser);
  }
}

export default new PrismaUserRepository();
