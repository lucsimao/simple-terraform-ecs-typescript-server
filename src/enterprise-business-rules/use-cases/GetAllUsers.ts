import { User } from '../entities/User';

export interface GetAllUsersUseCase {
  getAllUsers(): Promise<User>;
}
