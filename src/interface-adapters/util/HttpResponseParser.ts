import { ApiHttpResponse } from '../protocols/ApiHttpResponse';

export const ok = <T>(input: T): ApiHttpResponse<T> => {
  const result = {
    status: 200,
    statusCodeAsString: 'OK',
    message: input,
  };

  return result;
};

export const internalServerError = (
  input: Error[]
): ApiHttpResponse<string> => {
  const result = {
    status: 500,
    statusCodeAsString: 'INTERNAL SERVER ERROR',
    message: JSON.stringify(input.map((e) => e.message)),
  };

  return result;
};
