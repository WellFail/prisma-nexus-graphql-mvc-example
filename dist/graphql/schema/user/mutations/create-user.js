"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const UserMap_1 = require("../../../../api/user/mappers/UserMap");
exports.CreateUserMutation = schema_1.extendType({
    type: 'Mutation',
    definition: (t) => {
        t.field('createUser', {
            type: 'User',
            args: { data: schema_1.arg({ type: exports.CreateUserInput, required: true }) },
            resolve: async (_, { data }, { userService }) => {
                const user = await userService.createUser(data);
                return UserMap_1.UserMap.toNexus(user);
            },
        });
    },
});
exports.CreateUserInput = schema_1.inputObjectType({
    name: 'CreateUserInput',
    definition(t) {
        t.string('email', { required: true });
        t.string('password', { required: true });
        t.string('firstName');
        t.string('middleName');
        t.string('lastName');
        t.field('roles', {
            type: 'UserRole',
            required: true,
            list: true,
        });
    },
});
//# sourceMappingURL=create-user.js.map