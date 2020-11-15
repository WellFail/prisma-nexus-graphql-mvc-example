"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UniqueEntityID_1 = require("../../common/UniqueEntityID");
const Transaction_1 = require("../domain/Transaction");
class TransactionMap {
    static toDomain(raw) {
        const user = Transaction_1.Transaction.create({
            amount: raw.amount,
            createdAt: raw.createdAt,
            accountId: raw.accountId,
        }, new UniqueEntityID_1.UniqueEntityID(raw.id));
        return user;
    }
    static toPersistence(transaction) {
        return {
            id: transaction.id.toValue(),
            amount: transaction.amount,
            createdAt: transaction.createdAt,
            accountId: transaction.accountId,
        };
    }
    static toNexus(transaction) {
        return {
            id: transaction.id.toValue(),
            amount: transaction.amount,
        };
    }
}
exports.TransactionMap = TransactionMap;
//# sourceMappingURL=TransactionMap.js.map