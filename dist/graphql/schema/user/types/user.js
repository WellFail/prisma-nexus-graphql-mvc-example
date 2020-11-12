"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const AccountMap_1 = require("../../../../api/account/mappers/AccountMap");
exports.User = schema_1.objectType({
    name: 'User',
    definition(t) {
        t.id('id');
        t.string('email');
        t.string('name');
        t.field('roles', {
            type: 'UserRole',
            list: true,
        });
        t.field('accounts', {
            type: 'Account',
            list: true,
            resolve: async ({ id }, __, { accountService }) => {
                if (!id)
                    return [];
                const accounts = await accountService.getUserAccounts({ userId: id });
                return accounts.map((account) => AccountMap_1.AccountMap.toNexus(account));
            },
        });
    },
});
exports.UserRole = schema_1.enumType({
    name: 'UserRole',
    members: ['ADMIN', 'EMPLOYEE'],
});
exports.AuthPayload = schema_1.objectType({
    name: 'AuthPayload',
    definition(t) {
        t.string('token');
        t.field('user', { type: 'User' });
    },
});
//# sourceMappingURL=user.js.map