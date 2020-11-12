"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema"));
const context_1 = __importDefault(require("./context"));
const config = {
    schema: schema_1.default,
    context: context_1.default,
    tracing: true,
    introspection: process.env.ENV_NAME !== 'production',
    playground: process.env.ENV_NAME !== 'production',
    subscriptions: {
        path: '/',
        keepAlive: 10000,
        onConnect: async (connectionParams) => ({ authorization: (connectionParams === null || connectionParams === void 0 ? void 0 : connectionParams.Authorization) || (connectionParams === null || connectionParams === void 0 ? void 0 : connectionParams.authorization) }),
    },
};
const server = new apollo_server_1.ApolloServer(config);
server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => console.log(`🚀 Server started at ${url}`));
//# sourceMappingURL=server.js.map