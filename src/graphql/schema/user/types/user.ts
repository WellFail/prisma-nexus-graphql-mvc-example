import { enumType, objectType } from '@nexus/schema';

import accountService from '../../../../api/account/services/AccountService';
import {AccountMap} from "../../../../api/account/mappers/AccountMap";

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('email');
    t.string('name');
    t.field('roles', {
      type: 'UserRole',
      list: true,
    });
    t.field('accounts', {
      type: 'Account',
      list: true,
      resolve: async ({ id }) => {
        if (!id) return [];

        const accounts = await accountService.getUserAccounts({ userId: id });

        return accounts.map((account) => AccountMap.toNexus(account));
      },
    });
  },
});

export const UserRole = enumType({
  name: 'UserRole',
  members: ['ADMIN', 'EMPLOYEE'],
});
