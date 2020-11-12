"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
exports.Transaction = schema_1.objectType({
    name: 'Transaction',
    definition(t) {
        t.id('id');
        t.float('amount');
        // t.field('createdAt', { type: 'DateTime' });
    },
});
//# sourceMappingURL=transaction.js.map