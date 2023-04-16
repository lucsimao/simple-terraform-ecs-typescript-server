import { AxiosInstance } from 'axios';

import { HttpClient, HttpParams } from '../protocols/HttpClient';

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly axios: AxiosInstance) {}

  public async get<T>(input: HttpParams): Promise<T> {
    const response = await this.axios.get<T>(input.url, {
      headers: input.headers,
      params: { ...input.queryParams, ...input.pathParams },
      data: input.body,
    });
    const result = response.data;

    return result;
  }
}
