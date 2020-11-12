"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../domain/User");
const inversify_config_1 = require("../../../../../inversify.config");
const types_1 = require("../../../../../types");
describe('CreateUserService', () => {
    let service;
    let repositoryMock;
    beforeAll(async () => {
        service = inversify_config_1.container.get(types_1.TYPES.IUserService);
        repositoryMock = inversify_config_1.container.get(types_1.TYPES.IUserRepository);
    });
    describe('create', () => {
        it('should create user', async () => {
            const user = {
                email: 'test@example.com',
                firstName: 'Test',
                lastName: 'LastNameTest',
                middleName: 'middleName',
                password: 'qwerty123456',
                roles: ['EMPLOYEE'],
            };
            const resultUser = User_1.User.create(user);
            delete resultUser.id;
            jest.spyOn(repositoryMock, 'createUser').mockResolvedValueOnce(resultUser);
            const createdUser = await service.createUser(user);
            delete createdUser.id;
            expect(createdUser).toEqual(resultUser);
            // expect(repositoryMock.createUser).toBeCalled();
        });
    });
});
//# sourceMappingURL=create-user.service.spec.js.map