import express, { Request, Response, NextFunction} from 'express';
import createError, { HttpError } from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import cities from './routes';

require('dotenv').config()

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', cities);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(({ message, status }: HttpError, req: Request, res: Response) => {
  res.status( status || 500);
  res.json({
    status: status || 500,
    message
  });
});

export default app;
