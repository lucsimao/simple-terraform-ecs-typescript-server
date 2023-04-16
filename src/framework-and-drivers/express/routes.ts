import { Request, Response, Router, Express } from 'express';

import { AbstractController } from '../../interface-adapters/protocols/AbstractController';
import { makeGetAllUsersController } from '../factories/GetUserController';

const adaptRoute = <T, K>(controller: AbstractController<T, K>) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };
    const httpResponse = await controller.exec(request);
    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
      res.status(httpResponse.status).json(httpResponse);
    } else {
      res.status(httpResponse.status).json({
        status: httpResponse.status,
        statusAsString: httpResponse.statusCodeAsString,
        error: httpResponse.message,
      });
    }
  };
};

const users = (router: Router): void => {
  router.get('/users', adaptRoute(makeGetAllUsersController()));
};

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  users(router);
};
