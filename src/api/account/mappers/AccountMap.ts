import { Account as PersistenceAccount } from '@prisma/client';

import { NexusGenFieldTypes } from '../../../generated/typings';
import { UniqueEntityID } from '../../common/UniqueEntityID';

import { Account } from '../domain/Account';

export class AccountMap {
  static toDomain(raw: PersistenceAccount): Account {
    const account = Account.create(
      {
        name: raw.name,
        userId: raw.userId,
        balance: raw.balance,
        currency: raw.currency,
        createdAt: raw.createdAt,
      },
      new UniqueEntityID(raw.id),
    );

    return account;
  }

  static toPersistence(account: Account): PersistenceAccount {
    return {
      id: account.id.toValue(),
      currency: account.currency,
      balance: account.balance,
      userId: account.userId,
      name: account.name,
      createdAt: account.createdAt,
    };
  }

  static toNexus(account: Account): NexusGenFieldTypes['Account'] {
    return {
      id: account.id.toValue(),
      currency: account.currency,
      name: account.name,
      transactions: null,
    };
  }
}
