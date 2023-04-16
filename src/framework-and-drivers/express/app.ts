/* eslint-disable no-console */
import express from 'express';

import { Env } from '../config/Env';
import setupRoutes from './routes';

const app = express();

setupRoutes(app);

app.listen(Env.port, () =>
  console.log(`Server running at http://localhost:${Env.port}`)
);
