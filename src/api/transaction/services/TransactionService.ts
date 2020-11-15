import { injectable, inject } from 'inversify';

import { ITransactionRepository } from '../repository/ITransactionRepository';
import { TYPES } from '../../../types';

import { ITransactionService, CreateTransactionInterface, GetAccountTransaction } from './ITransactionService';
import { Transaction } from '../domain/Transaction';

@injectable()
export class TransactionService implements ITransactionService {
  constructor(
    @inject(TYPES.ITransactionRepository) private readonly transactionRepository: ITransactionRepository,
  ) {}

  public getAccountTransaction({ accountId }: GetAccountTransaction): Promise<Transaction[]> {
    return this.transactionRepository.getAccountTransactions({ accountId });
  }

  public createTransaction({ amount, accountId }: CreateTransactionInterface): Promise<Transaction> {
    return this.transactionRepository.createTransaction({ amount, accountId });
  }

  public getAllTransactions(): Promise<Transaction[]> {
    return this.transactionRepository.getAllTransactions();
  }
}
