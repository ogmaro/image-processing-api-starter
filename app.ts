import express, { Application } from 'express';
import routes from './v1/routes/index';
import { pageNotFound404 } from './v1/middleware/notfoundMiddleware';

const app: Application = express();


app.use('/v1/converter', routes);
app.use('/v1/converter', routes);
app.use('/v1/converter', routes);
app.use('*', pageNotFound404);

export default app;
