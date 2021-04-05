import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import { errors } from 'celebrate';
import AppeError from '@shared/errors/AppError';
import 'express-async-errors';

import '@shared/infra/typeorm';
import '@shared/containers';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppeError) {
      return response.status(err.statusCode).json({
        status: 'error',
        name: err.name,
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      name: err.name,
      message: 'Internal Server Error',
      erro: err.message,
    });
  },
);

app.listen(3535, () => {
  console.log('🏈  Server Running on Port 3535 ✨');
});
