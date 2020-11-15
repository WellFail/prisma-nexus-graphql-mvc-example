"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UniqueEntityID_1 = require("../../common/UniqueEntityID");
const User_1 = require("../domain/User");
class UserMap {
    static toDomain(raw) {
        const user = User_1.User.create({
            lastName: raw.lastName,
            firstName: raw.firstName,
            password: raw.password,
            email: raw.email,
            middleName: raw.middleName,
            roles: raw.roles,
        }, new UniqueEntityID_1.UniqueEntityID(raw.id));
        return user;
    }
    static toPersistence(user) {
        return {
            id: user.id.toValue(),
            email: user.email,
            password: user.password,
            middleName: user.middleName,
            firstName: user.firstName,
            lastName: user.lastName,
            roles: user.roles,
        };
    }
    static toNexus(user) {
        return {
            id: user.id.toValue(),
            email: user.email,
            name: user.getName(),
            roles: user.roles,
            accounts: null,
        };
    }
}
exports.UserMap = UserMap;
//# sourceMappingURL=UserMap.js.map