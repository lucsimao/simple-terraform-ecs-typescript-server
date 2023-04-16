export interface ApiHttpResponse<T> {
  status: number;
  statusCodeAsString: string;
  message: T | Error;
}
