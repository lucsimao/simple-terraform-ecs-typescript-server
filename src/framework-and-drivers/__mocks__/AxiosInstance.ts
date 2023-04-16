import { AxiosInstance } from 'axios';

import { makeUser } from '../../enterprise-business-rules/__mocks__/User';

export const makeAxiosInstanceStub = (): jest.Mocked<AxiosInstance> => {
  const result: jest.Mocked<Partial<AxiosInstance>> = {
    get: jest.fn().mockResolvedValue({ data: [makeUser()] }),
  };

  return result as jest.Mocked<AxiosInstance>;
};
