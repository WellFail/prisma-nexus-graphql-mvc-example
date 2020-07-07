import { ApolloServer } from 'apollo-server';

import schema from './schema';
import context from './context';

import { PrismaUserRepository } from '../api/user/repository/prisma/PrismaUserRepository';
import { UserService } from '../api/user/services/UserService';

const config = {
  schema,
  context,
  tracing: true,
  introspection: process.env.ENV_NAME !== 'production',
  playground: process.env.ENV_NAME !== 'production',
  subscriptions: {
    path: '/',
    keepAlive: 10000,
    onConnect: async (
      connectionParams: any,
    ) => ({ authorization: connectionParams?.Authorization || connectionParams?.authorization }),
  },
};

const server = new ApolloServer(config);

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`🚀 Server started at ${url}`));
