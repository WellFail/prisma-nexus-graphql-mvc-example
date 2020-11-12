import { User } from '@prisma/client';
import { IncomingMessage } from 'http';
import { container } from '../inversify.config';
import { TYPES } from '../types';
import { IUserService } from '../api/user/services/IUserService';
import { IAccountService } from '../api/account/services/IAccountService';
import { ITransactionService } from '../api/transaction/services/ITransactionService';

export interface InitialContext {
  request: IncomingMessage
  user: User | null,
  userService: IUserService,
  accountService: IAccountService,
  transactionService: ITransactionService,
}

export interface Context extends InitialContext {

}

export default async (
  { req, connection }: { req: IncomingMessage; connection: any },
): Promise<InitialContext> => {
  const userService: IUserService = container.get(TYPES.IUserService);
  const accountService: IAccountService = container.get(TYPES.IAccountService);
  const transactionService: ITransactionService = container.get(TYPES.ITransactionService);

  const context: InitialContext = {
    userService,
    accountService,
    transactionService,
    request: req,
    user: null,
  };

  const authorization = req ? req?.headers?.authorization : connection?.context?.authorization;
  if (authorization) {
    // context.user = await usersAPI.findUserByToken(authorization);
  }

  return context;
};
