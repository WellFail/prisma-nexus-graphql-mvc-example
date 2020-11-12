import { inject, injectable } from 'inversify';
import { Account } from '../../domain/Account';
import { AccountMap } from '../../mappers/AccountMap';

import { IAccountRepository, IGetAccountsByUser, ICreateAccount, IGetAccount } from '../IAccountRepository';
import { TYPES } from '../../../../types';
import { PrismaService } from '../../../../prisma-client';

@injectable()
export class PrismaAccountRepository implements IAccountRepository {
  constructor(
    @inject(TYPES.PrismaService) private readonly prisma: PrismaService,
  ) {
  }

  public async getAccount({ accountId }: IGetAccount): Promise<Account | null> {
    const account = await this.prisma.account.findOne({ where: { id: accountId } });
    if (!account) return null;

    return AccountMap.toDomain(account);
  }

  public async getAccounts(): Promise<Account[]> {
    const accounts = await this.prisma.account.findMany();

    return accounts.map((account) => AccountMap.toDomain(account));
  }

  public async getAccountsByUser({ userId }: IGetAccountsByUser): Promise<Account[]> {
    const accounts = await this.prisma.account.findMany({ where: { userId } });

    return accounts.map((account) => AccountMap.toDomain(account));
  }

  public async createAccount({ userId, name, currency }: ICreateAccount): Promise<Account> {
    const account = await this.prisma.account.create({
      data: {
        currency,
        name,
        user: { connect: { id: userId } },
      },
    });

    return AccountMap.toDomain(account);
  }
}
