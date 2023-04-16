/* eslint-disable no-console */
import { internalServerError, ok } from '../util/HttpResponseParser';
import { ApiHttpResponse } from './ApiHttpResponse';

export abstract class AbstractController<Input, Output> {
  public abstract handle(input: Input): Promise<Output>;

  public async exec(input: Input): Promise<ApiHttpResponse<Output | string>> {
    try {
      console.log('Received input', JSON.stringify(input));
      const result = await this.handle(input);

      return ok(result);
    } catch (error) {
      console.error(error);
      return internalServerError([error as Error]);
    }
  }
}
