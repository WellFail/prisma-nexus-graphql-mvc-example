import { injectable, inject } from 'inversify';

import { ITransactionRepository, ICreateTransaction, GetAccountTransactions } from '../ITransactionRepository';

import { TransactionMap } from '../../mappers/TransactionMap';

import { PrismaService } from '../../../../prisma-client';
import { TYPES } from '../../../../types';
import { Transaction } from '../../domain/Transaction';

@injectable()
export class PrismaTransactionRepository implements ITransactionRepository {
  constructor(
    @inject(TYPES.PrismaService) private readonly prisma: PrismaService,
  ) {
  }

  async getAccountTransactions({ accountId }: GetAccountTransactions): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany({ where: { account: { id: { equals: accountId } } } });

    return transactions.map((transaction) => TransactionMap.toDomain(transaction));
  }

  async getAllTransactions(): Promise<Transaction[]> {
    const transactions = await this.prisma.transaction.findMany();

    return transactions.map((transaction) => TransactionMap.toDomain(transaction));
  }

  async createTransaction({ accountId, amount }: ICreateTransaction): Promise<Transaction> {
    const createdTransaction = await this.prisma.transaction.create({
      data: {
        amount,
        account: {
          connect: {
            id: accountId,
          },
        },
      },
    });

    return TransactionMap.toDomain(createdTransaction);
  }

  // public async getAllUsers(): Promise<User[]> {
  //   const users = await this.prisma.user.findMany();

  //   return users.map((user) => UserMap.toDomain(user));
  // }

  // public async createUser(user: User): Promise<User> {
  //   const persistenceUser = UserMap.toPersistence(user);
  //   const createdUser = await this.prisma.user.create({
  //     data: {
  //       ...persistenceUser,
  //       roles: { set: persistenceUser.roles },
  //     },
  //   });

  //   return UserMap.toDomain(createdUser);
  // }

  // public async getUserByEmail(email: string): Promise<User | null> {
  //   const user = await this.prisma.user.findOne({ where: { email } });
  //   if (!user) return null;

  //   return UserMap.toDomain(user);
  // }
}
