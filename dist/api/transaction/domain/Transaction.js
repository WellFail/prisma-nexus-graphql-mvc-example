"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../../common/Entity");
class Transaction extends Entity_1.Entity {
    get createdAt() {
        return this.props.createdAt;
    }
    get amount() {
        return this.props.amount;
    }
    get accountId() {
        return this.props.accountId;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const defaultValues = { ...props };
        const user = new Transaction(defaultValues, id);
        return user;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map