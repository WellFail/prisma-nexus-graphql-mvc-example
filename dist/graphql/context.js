"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_config_1 = require("../inversify.config");
const types_1 = require("../types");
exports.default = async ({ req, connection }) => {
    var _a, _b;
    const userService = inversify_config_1.container.get(types_1.TYPES.IUserService);
    const accountService = inversify_config_1.container.get(types_1.TYPES.IAccountService);
    const context = {
        userService,
        accountService,
        request: req,
        user: null,
    };
    const authorization = req ? (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization : (_b = connection === null || connection === void 0 ? void 0 : connection.context) === null || _b === void 0 ? void 0 : _b.authorization;
    if (authorization) {
        // context.user = await usersAPI.findUserByToken(authorization);
    }
    return context;
};
//# sourceMappingURL=context.js.map