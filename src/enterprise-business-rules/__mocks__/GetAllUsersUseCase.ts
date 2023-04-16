import { GetAllUsersUseCase } from '../use-cases/GetAllUsers';
import { makeUser } from './User';

export const makeGetUserUseCaseStub = (): jest.Mocked<GetAllUsersUseCase> => ({
  getAllUsers: jest.fn().mockResolvedValue(makeUser()),
});
