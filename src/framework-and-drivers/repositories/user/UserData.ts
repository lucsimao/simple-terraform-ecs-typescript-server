import { GetAllUsersRepository } from '../../../application-business-rules/protocols/GetAllUsersRepository';
import { User } from '../../../enterprise-business-rules/entities/User';
import { Env } from '../../config/Env';
import { HttpClient } from '../../protocols/HttpClient';

export class UserData implements GetAllUsersRepository {
  constructor(private readonly httpClient: HttpClient) {}

  public async getAllUsers(): Promise<User> {
    const result = await this.httpClient.get<User>({
      url: Env.api.url,
    });

    return result;
  }
}
