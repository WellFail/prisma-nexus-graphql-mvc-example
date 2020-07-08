import repository from '../repository/prisma/PrismaAccountRepository';

import { IAccountRepository } from '../repository/IAccountRepository';
import { Account } from '../domain/Account';

import { IAccountService, IGetUserAccounts, ICreateUserAccount } from './IAccountService';

export class AccountService implements IAccountService {
  constructor(
    private readonly accountRepository: IAccountRepository,
  ) {}

  public async getAccounts(): Promise<Account[]> {
    return this.accountRepository.getAccounts();
  }

  public async getUserAccounts({ userId }: IGetUserAccounts): Promise<Account[]> {
    return this.accountRepository.getAccountsByUser({ userId });
  }

  createUserAccount({ userId, currency, name }: ICreateUserAccount): Promise<Account> {
    return this.accountRepository.createAccount({ userId, currency, name });
  }
}

export default new AccountService(repository);
