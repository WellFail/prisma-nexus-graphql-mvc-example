import { extendType } from '@nexus/schema';
import { TransactionMap } from '../../../../api/transaction/mappers/TransactionMap';

export const GetTransactionsQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('transactions', {
      type: 'Transaction',
      list: true,
      resolve: async (_, __, { transactionService }) => {
        const transactions = await transactionService.getAllTransactions();

        return transactions.map((transaction) => TransactionMap.toNexus(transaction));
      },
    });
  },
});
