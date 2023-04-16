import { User } from '../../enterprise-business-rules/entities/User';
import { GetAllUsersUseCase } from '../../enterprise-business-rules/use-cases/GetAllUsers';
import { AbstractController } from '../protocols/AbstractController';

export class GetAllUsersController extends AbstractController<void, User> {
  constructor(private readonly useCase: GetAllUsersUseCase) {
    super();
  }

  public async handle(): Promise<User> {
    const result = await this.useCase.getAllUsers();

    return result;
  }
}
