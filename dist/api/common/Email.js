"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isemail_1 = __importDefault(require("isemail"));
class Email {
    constructor(props) {
        this.props = props;
    }
    get email() {
        return this.props.email;
    }
    validate() {
        if (!isemail_1.default.validate(this.email)) {
            throw new Error('Incorrect Email');
        }
    }
    static create({ email }) {
        return new Email({ email });
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map