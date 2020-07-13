import { extendType } from '@nexus/schema';

import { AccountMap } from '../../../../api/account/mappers/AccountMap';

export const AccountQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('accounts', {
      type: 'Account',
      list: true,
      resolve: async (_, __, { accountService }) => {
        const accounts = await accountService.getAccounts();

        return accounts.map((account) => AccountMap.toNexus(account));
      },
    });
  },
});
