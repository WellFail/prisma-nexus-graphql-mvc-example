import { CreateUserInterface, IUserService } from '../../../services/IUserService';
import { User } from '../../../domain/User';
import { container } from '../../../../../inversify.config';
import { TYPES } from '../../../../../types';
import { IUserRepository } from '../../../repository/IUserRepository';

describe('CreateUserService', () => {
  let service: IUserService;
  let repositoryMock: IUserRepository;
  let user: CreateUserInterface;
  beforeAll(async () => {
    service = container.get(TYPES.IUserService);
    repositoryMock = container.get(TYPES.IUserRepository);
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
      const resultUser: User[] = [User.create(user)];
      delete resultUser[0].id;

      jest.spyOn(repositoryMock, 'getAllUsers').mockResolvedValueOnce(resultUser);

      const users = await service.getUsers();
      delete users[0].id;

      expect(users).toEqual(resultUser);
      // expect(repositoryMock.createUser).toBeCalled();
    });
  });
});
