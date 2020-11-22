import { inject, injectable } from 'inversify';

import { TYPES } from '../../../types';
import { ITransactionRepository } from '../../transaction/repository/ITransactionRepository';

import { Account } from '../domain/Account';
import { IAccountRepository } from '../repository/IAccountRepository';

import { IAccountService, IGetUserAccounts, ICreateUserAccount, IGetAccount, IGetAccountBalance } from './IAccountService';

@injectable()
export class AccountService implements IAccountService {
  constructor(
    @inject(TYPES.IAccountRepository) private readonly accountRepository: IAccountRepository,
    @inject(TYPES.ITransactionRepository) private readonly transactionRepository: ITransactionRepository,
  ) {}

  public async getAccountBalance({ accountId }: IGetAccountBalance): Promise<number> {
    const transactions = await this.transactionRepository.getAccountTransactions({ accountId });
    const sum = transactions.reduce((acc, transaction) => (acc + transaction.amount), 0);

    return sum;
  }

  public getAccount({ accountId }: IGetAccount): Promise<Account | null> {
    return this.accountRepository.getAccount({ accountId });
  }

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
