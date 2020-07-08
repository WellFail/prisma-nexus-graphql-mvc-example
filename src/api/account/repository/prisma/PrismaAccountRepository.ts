import prisma from '../../../../prisma-client';

import { Account } from '../../domain/Account';
import { AccountMap } from '../../mappers/AccountMap';

import { IAccountRepository, IGetAccountsByUser } from '../IAccountRepository';

export class PrismaAccountRepository implements IAccountRepository {
  async getAccounts(): Promise<Account[]> {
    const accounts = await prisma.account.findMany();

    return accounts.map((account) => AccountMap.toDomain(account));
  }

  async getAccountsByUser({ userId }: IGetAccountsByUser): Promise<Account[]> {
    const accounts = await prisma.account.findMany({ where: { userId } });

    return accounts.map((account) => AccountMap.toDomain(account));
  }
}

export default new PrismaAccountRepository();
