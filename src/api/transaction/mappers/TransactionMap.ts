import { Transaction as PersistenceTransaction } from '@prisma/client';

import { NexusGenFieldTypes } from '../../../generated/typings';
import { UniqueEntityID } from '../../common/UniqueEntityID';

import { Transaction } from '../domain/Transaction';

export class TransactionMap {
  static toDomain(raw: PersistenceTransaction): Transaction {
    const user = Transaction.create(
      {
        amount: raw.amount,
        createdAt: raw.createdAt,
        accountId: raw.accountId,
      },
      new UniqueEntityID(raw.id),
    );

    return user;
  }

  static toPersistence(transaction: Transaction): PersistenceTransaction {
    return {
      id: transaction.id.toValue(),
      amount: transaction.amount,
      createdAt: transaction.createdAt,
      accountId: transaction.accountId,
    };
  }

  static toNexus(transaction: Transaction): NexusGenFieldTypes['Transaction'] {
    return {
      id: transaction.id.toValue(),
      amount: transaction.amount,
      accountId: transaction.accountId,
      account: null,
    };
  }
}
