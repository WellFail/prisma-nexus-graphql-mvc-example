import { arg, extendType, inputObjectType } from '@nexus/schema';
import { UserMap } from '../../../../api/user/mappers/UserMap';

export const UserQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('user', {
      type: 'User',
      nullable: true,
      args: {
        data: arg({ type: 'GetUserArgs', required: true }),
      },
      resolve: async (_, { data }, { userService }) => {
        const user = await userService.getUser(data);
        if (!user) return null;

        return UserMap.toNexus(user);
      },
    });
  },
});

export const GetUserArgs = inputObjectType({
  name: 'GetUserArgs',
  definition(t) {
    t.id('id', { required: false });
    t.string('email', { required: false });
  },
});