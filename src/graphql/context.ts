import { User } from '@prisma/client';
import { IncomingMessage } from 'http';

export interface InitialContext {
  request: IncomingMessage
  user: User | null,
}

export interface Context extends InitialContext {}

export default async (
  { req, connection }: { req: IncomingMessage; connection: any },
): Promise<InitialContext> => {
  const context: InitialContext = {
    request: req,
    user: null,
  };

  const authorization = req ? req?.headers?.authorization : connection?.context?.authorization;
  if (authorization) {
    // context.user = await usersAPI.findUserByToken(authorization);
  }

  return context;
};
