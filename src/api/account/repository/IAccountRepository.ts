import { Account } from '../domain/Account';

export interface IAccountRepository {
  getAccounts(): Promise<Account[]>;
  getAccountsByUser({ userId }: IGetAccountsByUser): Promise<Account[]>;
}

export interface IGetAccountsByUser {
  userId: string;
}
