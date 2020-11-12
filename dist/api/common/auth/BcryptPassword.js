"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptPassword {
    constructor(props) {
        this.props = props;
    }
    async getHashedPassword() {
        const hashedPassword = await bcrypt_1.default.hash(this.props.password, 10);
        return hashedPassword;
    }
    static create(props) {
        const defaultValues = { ...props };
        const password = new BcryptPassword(defaultValues);
        return password;
    }
}
exports.BcryptPassword = BcryptPassword;
//# sourceMappingURL=BcryptPassword.js.map