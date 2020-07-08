import { Account } from '../domain/Account';
import { AccountCurrency } from '../domain/AccountCurrency';

export interface IAccountService {
  getAccounts(): Promise<Account[]>;
  getUserAccounts(data: IGetUserAccounts): Promise<Account[]>;
  createUserAccount(data: ICreateUserAccount): Promise<Account>;
}

export interface IGetUserAccounts {
  userId: string;
}

export interface ICreateUserAccount {
  userId: string;
  name: string;
  currency: AccountCurrency;
}
