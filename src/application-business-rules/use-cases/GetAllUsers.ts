import { User } from '../../enterprise-business-rules/entities/User';
import { GetAllUsersUseCase } from '../../enterprise-business-rules/use-cases/GetAllUsers';
import { GetAllUsersRepository } from '../protocols/GetAllUsersRepository';

export class GetAllUsers implements GetAllUsersUseCase {
  constructor(private readonly getUserRepository: GetAllUsersRepository) {}

  public async getAllUsers(): Promise<User> {
    const result = await this.getUserRepository.getAllUsers();

    return result;
  }
}
