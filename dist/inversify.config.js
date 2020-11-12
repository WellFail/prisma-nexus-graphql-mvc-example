"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("./types");
const PrismaUserRepository_1 = require("./api/user/repository/prisma/PrismaUserRepository");
const prisma_client_1 = require("./prisma-client");
const UserService_1 = require("./api/user/services/UserService");
const PrismaAccountRepository_1 = require("./api/account/repository/prisma/PrismaAccountRepository");
const AccountService_1 = require("./api/account/services/AccountService");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.IUserRepository).to(PrismaUserRepository_1.PrismaUserRepository);
container.bind(types_1.TYPES.IUserService).to(UserService_1.UserService);
container.bind(types_1.TYPES.IAccountRepository).to(PrismaAccountRepository_1.PrismaAccountRepository);
container.bind(types_1.TYPES.IAccountService).to(AccountService_1.AccountService);
container.bind(types_1.TYPES.PrismaService).to(prisma_client_1.PrismaService);
container.bind('PrismaConfig').toConstantValue({});
//# sourceMappingURL=inversify.config.js.map