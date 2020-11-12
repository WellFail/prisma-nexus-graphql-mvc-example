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
const AccountMap_1 = require("../../mappers/AccountMap");
const types_1 = require("../../../../types");
const prisma_client_1 = require("../../../../prisma-client");
let PrismaAccountRepository = class PrismaAccountRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAccounts() {
        const accounts = await this.prisma.account.findMany();
        return accounts.map((account) => AccountMap_1.AccountMap.toDomain(account));
    }
    async getAccountsByUser({ userId }) {
        const accounts = await this.prisma.account.findMany({ where: { userId } });
        return accounts.map((account) => AccountMap_1.AccountMap.toDomain(account));
    }
    async createAccount({ userId, name, currency }) {
        const account = await this.prisma.account.create({
            data: {
                currency,
                name,
                user: { connect: { id: userId } },
            },
        });
        return AccountMap_1.AccountMap.toDomain(account);
    }
};
PrismaAccountRepository = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.PrismaService)),
    __metadata("design:paramtypes", [prisma_client_1.PrismaService])
], PrismaAccountRepository);
exports.PrismaAccountRepository = PrismaAccountRepository;
//# sourceMappingURL=PrismaAccountRepository.js.map