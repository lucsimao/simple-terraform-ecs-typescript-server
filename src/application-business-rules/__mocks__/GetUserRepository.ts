import { makeUser } from '../../enterprise-business-rules/__mocks__/User';
import { GetAllUsersRepository } from '../protocols/GetAllUsersRepository';

export const getUserRepositoryStub =
  (): jest.Mocked<GetAllUsersRepository> => ({
    getAllUsers: jest.fn().mockResolvedValue(makeUser()),
  });
