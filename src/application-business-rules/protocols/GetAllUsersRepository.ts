import { User } from '../../enterprise-business-rules/entities/User';

export interface GetAllUsersRepository {
  getAllUsers(): Promise<User>;
}
