import { Transaction } from '../domain/Transaction';

export interface ITransactionRepository {
  getAccountTransactions(data: GetAccountTransactions): Promise<Transaction[]>;
  getAllTransactions(): Promise<Transaction[]>;
  createTransaction(transaction: ICreateTransaction): Promise<Transaction>;
}

export interface GetAccountTransactions {
  accountId: string;
}

export interface ICreateTransaction {
  amount: number,
  accountId: string,
}
