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
const Email_1 = require("../../common/Email");
const BcryptPassword_1 = require("../../common/auth/BcryptPassword");
const User_1 = require("../domain/User");
const types_1 = require("../../../types");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    createUser({ email, password, firstName, lastName, middleName, roles }) {
        const user = User_1.User.create({ email, password, firstName, lastName, middleName, roles });
        return this.userRepository.createUser(user);
    }
    async getUsers() {
        return this.userRepository.getAllUsers();
    }
    async signUpUser({ email, firstName, lastName, password }) {
        const userEmail = Email_1.Email.create({ email });
        userEmail.validate();
        const userExists = this.userRepository.getUserByEmail(userEmail.email);
        if (!userExists)
            throw new Error('This email is already exist in our system');
        const bcryptPassword = BcryptPassword_1.BcryptPassword.create({ password });
        const hashedPassword = await bcryptPassword.getHashedPassword();
        const user = User_1.User.create({
            firstName,
            lastName,
            password: hashedPassword,
            email: userEmail.email,
            roles: ['EMPLOYEE'],
        });
        const createdUser = await this.userRepository.createUser(user);
        return {
            user: createdUser,
            token: 'test',
        };
    }
};
UserService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.TYPES.IUserRepository)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map