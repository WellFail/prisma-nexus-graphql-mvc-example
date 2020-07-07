import { extendType } from '@nexus/schema';
import { UserMap } from '../../mappers/UserMap';

export const UserQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('users', {
      type: 'User',
      list: true,
      resolve: async (_, __, { userService }) => {
        const users = await userService.getUsers();

        return users.map((user) => UserMap.toPersistence(user));
      },
    });
    t.string('test', {
      resolve: () => 'test',
    });
  },
});
