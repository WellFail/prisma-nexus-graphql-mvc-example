import { enumType, objectType } from '@nexus/schema';

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.id('id');
    t.string('name');
    t.field('currency', {
      type: 'AccountCurrency',
    });
  },
});

export const AccountCurrency = enumType({
  name: 'AccountCurrency',
  members: ['USD', 'EUR', 'RUB'],
});
