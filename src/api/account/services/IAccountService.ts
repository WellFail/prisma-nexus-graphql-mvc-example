import { Account } from '../domain/Account';
import { AccountCurrency } from '../domain/AccountCurrency';

export interface IAccountService {
  getAccount(data: IGetAccount): Promise<Account | null>;
  getAccounts(): Promise<Account[]>;
  getAccountBalance(data: IGetAccountBalance): Promise<number>;
  getUserAccounts(data: IGetUserAccounts): Promise<Account[]>;
  createUserAccount(data: ICreateUserAccount): Promise<Account>;
}

export interface IGetAccountBalance {
  accountId: string;
}

export interface IGetAccount {
  accountId: string;
}

export interface IGetUserAccounts {
  userId: string;
}

export interface ICreateUserAccount {
  userId: string;
  name: string;
  currency: AccountCurrency;
}
