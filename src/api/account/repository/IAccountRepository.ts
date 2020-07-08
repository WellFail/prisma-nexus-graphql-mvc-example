import { Account } from '../domain/Account';
import { AccountCurrency } from '../domain/AccountCurrency';

export interface IAccountRepository {
  getAccounts(): Promise<Account[]>;
  getAccountsByUser(data: IGetAccountsByUser): Promise<Account[]>;
  createAccount(data: ICreateAccount): Promise<Account>;
}

export interface IGetAccountsByUser {
  userId: string;
}

export interface ICreateAccount {
  userId: string;
  name: string;
  currency: AccountCurrency;
}
