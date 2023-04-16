import { makeAxiosInstanceStub } from '../__mocks__/AxiosInstance';
import { makeUser } from '../../enterprise-business-rules/__mocks__/User';
import { AxiosHttpClient } from './AxiosHttpClient';

const makeSut = () => {
  const axiosInstance = makeAxiosInstanceStub();
  const sut = new AxiosHttpClient(axiosInstance);

  return { sut, axiosInstance };
};

describe('user data', () => {
  const input = { url: 'some url' };
  describe('should return user', () => {
    test('when success', async () => {
      const { sut } = makeSut();

      const result = await sut.get(input);

      expect(result).toEqual([makeUser()]);
    });
  });

  describe('should not return user', () => {
    test('when fails', async () => {
      const { sut, axiosInstance } = makeSut();
      const error = new Error('Axios Error');
      axiosInstance.get.mockRejectedValueOnce(error);

      const promise = sut.get(input);

      await expect(promise).rejects.toThrow(error);
    });
  });
});
