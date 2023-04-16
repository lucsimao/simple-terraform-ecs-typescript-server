import { makeGetUserUseCaseStub } from '../../enterprise-business-rules/__mocks__/GetAllUsersUseCase';
import { makeUser } from '../../enterprise-business-rules/__mocks__/User';
import { internalServerError, ok } from '../util/HttpResponseParser';
import { GetAllUsersController } from './GetAllUserController';

const makeSut = () => {
  const getUserUseCase = makeGetUserUseCaseStub();
  const sut = new GetAllUsersController(getUserUseCase);

  return { sut, getUserUseCase };
};

describe('get all users controller', () => {
  describe('should return user', () => {
    test('when success', async () => {
      const { sut } = makeSut();

      const result = await sut.exec();

      expect(result).toEqual(ok(makeUser()));
    });
  });

  describe('should not return user', () => {
    test('when fails', async () => {
      const { sut, getUserUseCase } = makeSut();
      const useCaseError = new Error('UseCase Error');
      getUserUseCase.getAllUsers.mockRejectedValueOnce(useCaseError);

      const result = await sut.exec();

      expect(result).toEqual(internalServerError([useCaseError]));
    });
  });
});
