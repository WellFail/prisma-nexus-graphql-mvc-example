"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../../common/Entity");
class Account extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    get name() {
        return this.props.name;
    }
    get currency() {
        return this.props.currency;
    }
    get balance() {
        return this.props.balance;
    }
    get userId() {
        return this.props.userId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    static create(props, id) {
        const defaultValues = { ...props };
        const account = new Account(defaultValues, id);
        return account;
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map