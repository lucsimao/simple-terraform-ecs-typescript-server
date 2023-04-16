import { makeHttpClientStub } from '../../__mocks__/HttpClient';
import { makeUser } from '../../../enterprise-business-rules/__mocks__/User';
import { UserData } from './UserData';

const makeSut = () => {
  const httpClient = makeHttpClientStub();
  const sut = new UserData(httpClient);

  return { sut, httpClient };
};

describe('user data', () => {
  describe('should return user', () => {
    test('when success', async () => {
      const { sut } = makeSut();

      const result = await sut.getAllUsers();

      expect(result).toEqual([makeUser()]);
    });
  });

  describe('should not return user', () => {
    test('when fails', async () => {
      const { sut, httpClient } = makeSut();
      const error = new Error('HttpClient Error');
      httpClient.get.mockRejectedValueOnce(error);

      const promise = sut.getAllUsers();

      await expect(promise).rejects.toThrow(error);
    });
  });
});
