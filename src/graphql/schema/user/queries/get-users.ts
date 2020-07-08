import { extendType } from '@nexus/schema';
import { UserMap } from '../../../../api/user/mappers/UserMap';
import userService from '../../../../api/user/services/UserService';

export const UserQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('users', {
      type: 'User',
      list: true,
      resolve: async (_, __) => {
        const users = await userService.getUsers();

        return users.map((user) => UserMap.toNexus(user));
      },
    });
  },
});
