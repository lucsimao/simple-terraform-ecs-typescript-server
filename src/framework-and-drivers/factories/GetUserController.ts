import axios from 'axios';

import { GetAllUsers } from '../../application-business-rules/use-cases/GetAllUsers';
import { GetAllUsersController } from '../../interface-adapters/controllers/GetAllUserController';
import { AxiosHttpClient } from '../http/AxiosHttpClient';
import { UserData } from '../repositories/user/UserData';

const makeHttpClient = () => {
  const axiosInstance = axios.create();
  const result = new AxiosHttpClient(axiosInstance);

  return result;
};

const makeGetAllUsersRepository = () => {
  const httpClient = makeHttpClient();
  const result = new UserData(httpClient);

  return result;
};

const makeGetAllUsersUseCase = () => {
  const repository = makeGetAllUsersRepository();
  const result = new GetAllUsers(repository);

  return result;
};

export const makeGetAllUsersController = () => {
  const useCase = makeGetAllUsersUseCase();
  const result = new GetAllUsersController(useCase);

  return result;
};
