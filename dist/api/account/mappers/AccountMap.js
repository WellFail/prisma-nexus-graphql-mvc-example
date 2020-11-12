"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UniqueEntityID_1 = require("../../common/UniqueEntityID");
const Account_1 = require("../domain/Account");
class AccountMap {
    static toDomain(raw) {
        const account = Account_1.Account.create({
            name: raw.name,
            userId: raw.userId,
            balance: raw.balance,
            currency: raw.currency,
            createdAt: raw.createdAt,
        }, new UniqueEntityID_1.UniqueEntityID(raw.id));
        return account;
    }
    static toPersistence(account) {
        return {
            id: account.id.toValue(),
            currency: account.currency,
            balance: account.balance,
            userId: account.userId,
            name: account.name,
            createdAt: account.createdAt,
        };
    }
    static toNexus(account) {
        return {
            id: account.id.toValue(),
            currency: account.currency,
            name: account.name,
        };
    }
}
exports.AccountMap = AccountMap;
//# sourceMappingURL=AccountMap.js.map