"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const AccountMap_1 = require("../../../../api/account/mappers/AccountMap");
exports.CreateAccountMutation = schema_1.extendType({
    type: 'Mutation',
    definition: (t) => {
        t.field('createAccount', {
            type: 'Account',
            args: { data: schema_1.arg({ type: exports.CreateAccountInput, required: true }) },
            resolve: async (_, { data }, { accountService }) => {
                const account = await accountService.createUserAccount(data);
                return AccountMap_1.AccountMap.toNexus(account);
            },
        });
    },
});
exports.CreateAccountInput = schema_1.inputObjectType({
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
//# sourceMappingURL=create-account.js.map