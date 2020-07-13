import { CreateUserInterface, IUserService } from '../../../services/IUserService';
import { User } from '../../../domain/User';
import { container } from '../../../../../inversify.config';
import { TYPES } from '../../../../../types';
import { IUserRepository } from '../../../repository/IUserRepository';

describe('CreateUserService', () => {
  let service: IUserService;
  let repositoryMock: IUserRepository;
  beforeAll(async () => {
    service = container.get(TYPES.IUserService);
    repositoryMock = container.get(TYPES.IUserRepository);
  });

  describe('create', () => {
    it('should create user', async () => {
      const user: CreateUserInterface = {
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'LastNameTest',
        middleName: 'middleName',
        password: 'qwerty123456',
        roles: ['EMPLOYEE'],
      };

      const resultUser: User = User.create(user);
      delete resultUser.id;

      jest.spyOn(repositoryMock, 'createUser').mockResolvedValueOnce(resultUser);

      const createdUser = await service.createUser(user);
      delete createdUser.id;

      expect(createdUser).toEqual(resultUser);
      // expect(repositoryMock.createUser).toBeCalled();
    });
  });
});
