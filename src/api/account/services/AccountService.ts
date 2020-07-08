import repository from '../repository/prisma/PrismaAccountRepository';

import { IAccountRepository } from '../repository/IAccountRepository';
import { Account } from '../domain/Account';

export class AccountService {
  constructor(
    private readonly accountRepository: IAccountRepository,
  ) {}

  public async getAccounts(): Promise<Account[]> {
    return this.accountRepository.getAccounts();
  }

  public async getUserAccounts({ userId }: IGetUserAccounts): Promise<Account[]> {
    return this.accountRepository.getAccountsByUser({ userId });
  }
}

export default new AccountService(repository);

interface IGetUserAccounts {
  userId: string;
}
