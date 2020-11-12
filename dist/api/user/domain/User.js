"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("../../common/Entity");
class User extends Entity_1.Entity {
    get roles() {
        return this.props.roles;
    }
    get email() {
        return this.props.email;
    }
    get password() {
        return this.props.password;
    }
    get firstName() {
        return this.props.firstName;
    }
    get lastName() {
        return this.props.lastName;
    }
    get middleName() {
        return this.props.middleName;
    }
    constructor(props, id) {
        super(props, id);
    }
    getName() {
        return `${(this.firstName) || ''} ${(this.middleName) || ''} ${(this.lastName) || ''}`.trim();
    }
    static create(props, id) {
        const defaultValues = { ...props };
        const user = new User(defaultValues, id);
        return user;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map