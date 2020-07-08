import { extendType, inputObjectType, arg } from '@nexus/schema';

import userService from '../../../../api/user/services/UserService';
import { UserMap } from '../../../../api/user/mappers/UserMap';

export const SignUpUserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('signUp', {
      type: 'AuthPayload',
      args: { data: arg({ type: SignUpInput, required: true }) },
      resolve: async (_, { data }) => {
        const { user, token } = await userService.signUpUser(data);

        return {
          token,
          user: UserMap.toNexus(user),
        };
      },
    });
  },
});

export const SignUpInput = inputObjectType({
  name: 'SignUpInput',
  definition(t) {
    t.string('email', { required: true });
    t.string('password', { required: true });
    t.string('firstName');
    t.string('lastName');
  },
});
