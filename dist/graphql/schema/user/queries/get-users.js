"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const UserMap_1 = require("../../../../api/user/mappers/UserMap");
exports.UserQuery = schema_1.extendType({
    type: 'Query',
    definition: (t) => {
        t.field('users', {
            type: 'User',
            list: true,
            resolve: async (_, __, { userService }) => {
                const users = await userService.getUsers();
                return users.map((user) => UserMap_1.UserMap.toNexus(user));
            },
        });
    },
});
//# sourceMappingURL=get-users.js.map