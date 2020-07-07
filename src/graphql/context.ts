import { PrismaClient, User } from '@prisma/client';
import { IncomingMessage } from 'http';

import { UserService } from '../api/user/services/UserService';

import prisma from '../prisma-client';
import { PrismaUserRepository } from '../api/user/repository/prisma/PrismaUserRepository';

export interface InitialContext {
  prisma: PrismaClient
  request: IncomingMessage
  user: User | null,
  userService: UserService,
}

export interface Context extends InitialContext {}

export default async (
  { req, connection }: { req: IncomingMessage; connection: any },
): Promise<InitialContext> => {
  const userRepository = new PrismaUserRepository(prisma);
  const userService = new UserService(userRepository);

  const context: InitialContext = {
    prisma,
    userService,
    request: req,
    user: null,
  };

  const authorization = req ? req?.headers?.authorization : connection?.context?.authorization;
  if (authorization) {
    // context.user = await usersAPI.findUserByToken(authorization);
  }

  return context;
};
