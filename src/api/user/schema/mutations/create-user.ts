import { arg, extendType, inputObjectType } from '@nexus/schema';
import {UserMap} from "../../mappers/UserMap";

export const UserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createUser', {
      type: 'User',
      args: { data: arg({ type: CreateUserInput, required: true }) },
      resolve: async (_, { data }, { userService }) => {
        const user = await userService.createUser(data);

        return UserMap.toPersistence(user);
      },
    });
  },
});

export const CreateUserInput = inputObjectType({
  name: 'CreateUserInput',
  definition(t) {
    t.string('email', { required: true });
    t.string('password', { required: true });
    t.string('firstName', { required: true });
  },
});
