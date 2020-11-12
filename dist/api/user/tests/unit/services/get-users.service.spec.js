"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../domain/User");
const inversify_config_1 = require("../../../../../inversify.config");
const types_1 = require("../../../../../types");
describe('CreateUserService', () => {
    let service;
    let repositoryMock;
    let user;
    beforeAll(async () => {
        service = inversify_config_1.container.get(types_1.TYPES.IUserService);
        repositoryMock = inversify_config_1.container.get(types_1.TYPES.IUserRepository);
        user = {
            email: 'test@example.com',
            firstName: 'Test',
            lastName: 'LastNameTest',
            middleName: 'middleName',
            password: 'qwerty123456',
            roles: ['EMPLOYEE'],
        };
        await service.createUser(user);
    });
    describe('get', () => {
        it('should return created users', async () => {
            const resultUser = [User_1.User.create(user)];
            delete resultUser[0].id;
            jest.spyOn(repositoryMock, 'getAllUsers').mockResolvedValueOnce(resultUser);
            const users = await service.getUsers();
            delete users[0].id;
            expect(users).toEqual(resultUser);
            // expect(repositoryMock.createUser).toBeCalled();
        });
    });
});
//# sourceMappingURL=get-users.service.spec.js.map