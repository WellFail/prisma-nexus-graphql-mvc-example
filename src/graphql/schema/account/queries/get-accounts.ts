import { extendType } from '@nexus/schema';

import accountService from '../../../../api/account/services/AccountService';

import { AccountMap } from '../../../../api/account/mappers/AccountMap';

export const AccountQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('accounts', {
      type: 'Account',
      list: true,
      resolve: async (_, __) => {
        const accounts = await accountService.getAccounts();

        return accounts.map((account) => AccountMap.toNexus(account));
      },
    });
  },
});
