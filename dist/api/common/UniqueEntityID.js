"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cuid_1 = __importDefault(require("cuid"));
class UniqueEntityID {
    constructor(id) {
        this.value = id || cuid_1.default();
    }
    equals(id) {
        if (id === null || id === undefined) {
            return false;
        }
        return id.toValue() === this.value;
    }
    toString() {
        return String(this.value);
    }
    toValue() {
        return this.value;
    }
}
exports.UniqueEntityID = UniqueEntityID;
//# sourceMappingURL=UniqueEntityID.js.map