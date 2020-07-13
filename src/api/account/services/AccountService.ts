import { inject, injectable } from 'inversify';

import { TYPES } from '../../../types';

import { Account } from '../domain/Account';
import { IAccountRepository } from '../repository/IAccountRepository';

import { IAccountService, IGetUserAccounts, ICreateUserAccount } from './IAccountService';

@injectable()
export class AccountService implements IAccountService {
  constructor(
    @inject(TYPES.IAccountRepository) private readonly accountRepository: IAccountRepository,
  ) {}

  public getAccounts(): Promise<Account[]> {
    return this.accountRepository.getAccounts();
  }

  public getUserAccounts({ userId }: IGetUserAccounts): Promise<Account[]> {
    return this.accountRepository.getAccountsByUser({ userId });
  }

  public createUserAccount({ userId, currency, name }: ICreateUserAccount): Promise<Account> {
    return this.accountRepository.createAccount({ userId, currency, name });
  }
}
