import { arg, extendType, inputObjectType } from '@nexus/schema';

import { AccountMap } from '../../../../api/account/mappers/AccountMap';

export const CreateAccountMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createAccount', {
      type: 'Account',
      args: { data: arg({ type: CreateAccountInput, required: true }) },
      resolve: async (_, { data }, { accountService }) => {
        const account = await accountService.createUserAccount(data);

        return AccountMap.toNexus(account);
      },
    });
  },
});

export const CreateAccountInput = inputObjectType({
  name: 'CreateAccountInput',
  definition(t) {
    t.string('name', { required: true });
    t.string('userId', { required: true });
    t.field('currency', {
      type: 'AccountCurrency',
      required: true,
    });
  },
});
