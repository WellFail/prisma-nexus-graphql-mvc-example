"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const UserMap_1 = require("../../mappers/UserMap");
const prisma_client_1 = require("../../../../prisma-client");
const types_1 = require("../../../../types");
let PrismaUserRepository = class PrismaUserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllUsers() {
        const users = await this.prisma.user.findMany();
        return users.map((user) => UserMap_1.UserMap.toDomain(user));
    }
    async createUser(user) {
        const persistenceUser = UserMap_1.UserMap.toPersistence(user);
        const createdUser = await this.prisma.user.create({
            data: {
                ...persistenceUser,
                roles: { set: persistenceUser.roles },
            },
        });
        return UserMap_1.UserMap.toDomain(createdUser);
    }
    async getUserByEmail(email) {
        const user = await this.prisma.user.findOne({ where: { email } });
        if (!user)
            return null;
        return UserMap_1.UserMap.toDomain(user);
    }
};
PrismaUserRepository = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.PrismaService)),
    __metadata("design:paramtypes", [prisma_client_1.PrismaService])
], PrismaUserRepository);
exports.PrismaUserRepository = PrismaUserRepository;
//# sourceMappingURL=PrismaUserRepository.js.map