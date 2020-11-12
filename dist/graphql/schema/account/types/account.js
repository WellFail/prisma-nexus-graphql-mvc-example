"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
exports.Account = schema_1.objectType({
    name: 'Account',
    definition(t) {
        t.id('id');
        t.string('name');
        t.field('currency', {
            type: 'AccountCurrency',
        });
    },
});
exports.AccountCurrency = schema_1.enumType({
    name: 'AccountCurrency',
    members: ['USD', 'EUR', 'RUB'],
});
//# sourceMappingURL=account.js.map