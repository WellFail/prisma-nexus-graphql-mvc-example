"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const AccountMap_1 = require("../../../../api/account/mappers/AccountMap");
exports.AccountQuery = schema_1.extendType({
    type: 'Query',
    definition: (t) => {
        t.field('accounts', {
            type: 'Account',
            list: true,
            resolve: async (_, __, { accountService }) => {
                const accounts = await accountService.getAccounts();
                return accounts.map((account) => AccountMap_1.AccountMap.toNexus(account));
            },
        });
    },
});
//# sourceMappingURL=get-accounts.js.map