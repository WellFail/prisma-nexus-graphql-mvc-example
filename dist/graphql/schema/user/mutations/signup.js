"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("@nexus/schema");
const UserMap_1 = require("../../../../api/user/mappers/UserMap");
exports.SignUpUserMutation = schema_1.extendType({
    type: 'Mutation',
    definition: (t) => {
        t.field('signUp', {
            type: 'AuthPayload',
            args: { data: schema_1.arg({ type: exports.SignUpInput, required: true }) },
            resolve: async (_, { data }, { userService }) => {
                const { user, token } = await userService.signUpUser(data);
                return {
                    token,
                    user: UserMap_1.UserMap.toNexus(user),
                };
            },
        });
    },
});
exports.SignUpInput = schema_1.inputObjectType({
    name: 'SignUpInput',
    definition(t) {
        t.string('email', { required: true });
        t.string('password', { required: true });
        t.string('firstName');
        t.string('lastName');
    },
});
//# sourceMappingURL=signup.js.map