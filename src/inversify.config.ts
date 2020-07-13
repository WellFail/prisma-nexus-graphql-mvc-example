import { Container } from 'inversify';

import { TYPES } from './types';
import { IUserRepository } from './api/user/repository/IUserRepository';
import { PrismaUserRepository } from './api/user/repository/prisma/PrismaUserRepository';
import { PrismaService } from './prisma-client';
import { UserService } from './api/user/services/UserService';
import { IUserService } from './api/user/services/IUserService';
import { IAccountRepository } from './api/account/repository/IAccountRepository';
import { PrismaAccountRepository } from './api/account/repository/prisma/PrismaAccountRepository';
import { IAccountService } from './api/account/services/IAccountService';
import { AccountService } from './api/account/services/AccountService';

const container = new Container();

container.bind<IUserRepository>(TYPES.IUserRepository).to(PrismaUserRepository);
container.bind<IUserService>(TYPES.IUserService).to(UserService);
container.bind<IAccountRepository>(TYPES.IAccountRepository).to(PrismaAccountRepository);
container.bind<IAccountService>(TYPES.IAccountService).to(AccountService);
container.bind<PrismaService>(TYPES.PrismaService).to(PrismaService);
container.bind('PrismaConfig').toConstantValue({ });

export { container };
