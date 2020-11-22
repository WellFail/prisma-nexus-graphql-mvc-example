import { enumType, objectType } from '@nexus/schema';

import { AccountMap } from '../../../../api/account/mappers/AccountMap';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id', { nullable: false });
    t.string('email');
    t.string('name');
    t.field('roles', {
      type: 'UserRole',
      list: true,
    });
    t.field('accounts', {
      type: 'Account',
      list: true,
      resolve: async ({ id }, __, { accountService }) => {
        if (!id) return [];

        const accounts = await accountService.getUserAccounts({ userId: id });

        return accounts.map((account) => AccountMap.toNexus(account));
      },
    });
    t.float('balance', {
      resolve: async ({ id }, _, { accountService }) => {
        const accounts = await accountService.getUserAccounts({ userId: id });
        const accountsBalances = await Promise.all(accounts.map(async (account) => {
          const balance = await accountService.getAccountBalance({ accountId: account.id.toString() });

          return balance;
        }));

        const userBalance = accountsBalances.reduce((acc, balance) => (acc + balance), 0);

        return userBalance;
      },
    });
  },
});

export const UserRole = enumType({
  name: 'UserRole',
  members: ['ADMIN', 'EMPLOYEE'],
});

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});
