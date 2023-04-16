import { getUserRepositoryStub } from '../__mocks__/GetUserRepository';
import { makeUser } from '../../enterprise-business-rules/__mocks__/User';
import { GetAllUsers } from './GetAllUsers';

const makeSut = () => {
  const getUserRepository = getUserRepositoryStub();
  const sut = new GetAllUsers(getUserRepository);

  return { sut, getUserRepository };
};

describe('get user', () => {
  describe('should return user', () => {
    test('when success', async () => {
      const { sut } = makeSut();

      const result = await sut.getAllUsers();

      expect(result).toEqual(makeUser());
    });
  });

  describe('should not return user', () => {
    test('when fails', async () => {
      const { sut, getUserRepository } = makeSut();
      const repositoryError = new Error('Repository Error');
      getUserRepository.getAllUsers.mockRejectedValueOnce(repositoryError);

      const promise = sut.getAllUsers();

      await expect(promise).rejects.toThrow(repositoryError);
    });
  });
});
