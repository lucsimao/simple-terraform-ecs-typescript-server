interface HttpHeaders {
  [key: string]: string;
}

interface HttpQueryParams {
  [key: string]: string;
}

interface HttpPathParams {
  [key: string]: string;
}

export interface HttpParams<T = unknown> {
  url: string;
  headers?: HttpHeaders;
  queryParams?: HttpQueryParams;
  pathParams?: HttpPathParams;
  body?: T;
}

export interface HttpClient {
  get<T>(input: HttpParams): Promise<T>;
}
