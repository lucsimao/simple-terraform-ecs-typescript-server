import { makeUser } from '../../enterprise-business-rules/__mocks__/User';
import { HttpClient } from '../protocols/HttpClient';

export const makeHttpClientStub = (): jest.Mocked<HttpClient> => ({
  get: jest.fn().mockResolvedValue([makeUser()]),
});
