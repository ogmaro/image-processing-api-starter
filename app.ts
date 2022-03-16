import express, { Application, urlencoded } from 'express';
import routes from './src/v1/routes/index';
import { pageNotFound404 } from './src/v1/middleware/notfoundMiddleware';
import logger from './src/v1/middleware/logger.middleware';

const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use('/v1/converter', logger, routes);
app.use('*', pageNotFound404);

export default app;
