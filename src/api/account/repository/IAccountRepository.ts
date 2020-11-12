import { Account } from '../domain/Account';
import { AccountCurrency } from '../domain/AccountCurrency';

export interface IAccountRepository {
  getAccount(data: IGetAccount): Promise<Account | null>;
  getAccounts(): Promise<Account[]>;
  getAccountsByUser(data: IGetAccountsByUser): Promise<Account[]>;
  createAccount(data: ICreateAccount): Promise<Account>;
}

export interface IGetAccount {
  accountId: string;
}

export interface IGetAccountsByUser {
  userId: string;
}

export interface ICreateAccount {
  userId: string;
  name: string;
  currency: AccountCurrency;
}
