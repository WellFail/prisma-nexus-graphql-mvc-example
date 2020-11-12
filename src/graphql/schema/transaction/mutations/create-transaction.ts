import { arg, extendType, inputObjectType } from '@nexus/schema';
import { TransactionMap } from '../../../../api/transaction/mappers/TransactionMap';

export const CreateTransactionMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createTransaction', {
      type: 'Transaction',
      args: { data: arg({ type: CreateTransactionInput, required: true }) },
      resolve: async (_, { data }, { transactionService }) => {
        const transaction = await transactionService.createTransaction(data);

        return TransactionMap.toNexus(transaction);
      },
    });
  },
});

export const CreateTransactionInput = inputObjectType({
  name: 'CreateTransactionInput',
  definition(t) {
    t.float('amount', { required: true });
    t.id('accountId', { required: true });
  },
});
