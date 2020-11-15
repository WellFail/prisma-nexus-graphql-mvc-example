import { objectType } from '@nexus/schema';
import { AccountMap } from '../../../../api/account/mappers/AccountMap';

export const Transaction = objectType({
  name: 'Transaction',
  definition(t) {
    t.id('id');
    t.float('amount');
    t.id('accountId', { nullable: false });
    t.field('account', {
      type: 'Account',
      nullable: true,
      resolve: async ({ accountId }, _, { accountService }) => {
        const account = await accountService.getAccount({ accountId });
        if (!account) return null;

        return AccountMap.toNexus(account);
      },
    });
    // t.field('createdAt', { type: 'DateTime' });
  },
});
