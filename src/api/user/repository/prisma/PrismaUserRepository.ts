import { PrismaClient } from '@prisma/client';

import { IUserRepository } from '../IUserRepository';

import { User } from '../../domain/User';
import { UserMap } from '../../mappers/UserMap';

export class PrismaUserRepository implements IUserRepository {
  constructor(
    private readonly prisma: PrismaClient,
  ) {}

  public async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map((user) => UserMap.toDomain(user));
  }

  public async createUser(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: UserMap.toPersistence(user),
    });

    return UserMap.toDomain(createdUser);
  }
}
