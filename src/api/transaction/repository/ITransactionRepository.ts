import { Transaction } from '../domain/Transaction';

export interface ITransactionRepository {
  getAccountTransactions(data: GetAccountTransactions): Promise<Transaction[]>;
  getAllTransactions(): Promise<Transaction[]>;
  createTransaction(transaction: ICreateTransaction): Promise<Transaction>;
}

export interface getTransactionSumByAccountId {
  accountId: string;
}

export interface GetAccountTransactions {
  accountId: string;
}

export interface ICreateTransaction {
  amount: number,
  accountId: string,
}
