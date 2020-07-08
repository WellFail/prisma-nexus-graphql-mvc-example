import prisma from '../../../../prisma-client';

import { Account } from '../../domain/Account';
import { AccountMap } from '../../mappers/AccountMap';

import { IAccountRepository, IGetAccountsByUser, ICreateAccount } from '../IAccountRepository';

export class PrismaAccountRepository implements IAccountRepository {
  public async getAccounts(): Promise<Account[]> {
    const accounts = await prisma.account.findMany();

    return accounts.map((account) => AccountMap.toDomain(account));
  }

  public async getAccountsByUser({ userId }: IGetAccountsByUser): Promise<Account[]> {
    const accounts = await prisma.account.findMany({ where: { userId } });

    return accounts.map((account) => AccountMap.toDomain(account));
  }

  public async createAccount({ userId, name, currency }: ICreateAccount): Promise<Account> {
    const account = await prisma.account.create({
      data: {
        currency,
        name,
        user: { connect: { id: userId } },
      },
    });

    return AccountMap.toDomain(account);
  }
}

export default new PrismaAccountRepository();
