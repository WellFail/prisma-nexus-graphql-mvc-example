import { enumType, objectType } from '@nexus/schema';
import { TransactionMap } from '../../../../api/transaction/mappers/TransactionMap';

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.id('id', { nullable: false });
    t.string('name');
    t.field('currency', { type: 'AccountCurrency' });
    t.field('transactions', {
      type: 'Transaction',
      list: true,
      resolve: async ({ id }, _, { transactionService }) => {
        const transactions = await transactionService.getAccountTransaction({ accountId: id });

        return transactions.map((transaction) => TransactionMap.toNexus(transaction));
      },
    });
  },
});

export const AccountCurrency = enumType({
  name: 'AccountCurrency',
  members: ['USD', 'EUR', 'RUB'],
});
