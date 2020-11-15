import { Transaction } from '../domain/Transaction';

export interface ITransactionService {
  createTransaction(data: CreateTransactionInterface): Promise<Transaction>;
  getAllTransactions(): Promise<Transaction[]>;
  getAccountTransaction(data: GetAccountTransaction): Promise<Transaction[]>
}

export interface GetAccountTransaction {
  accountId: string,
}

export interface CreateTransactionInterface {
  amount: number,
  accountId: string,
}
