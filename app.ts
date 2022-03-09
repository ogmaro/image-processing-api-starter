import express, { Application } from 'express';
import routes from './v1/routes';


const app: Application = express();

// import { createClient } from 'pexels';

// const client = createClient(
//   '563492ad6f9170000100000161e6831e962e4bfdaa9633c2b963b22e'
// );

app.use('/v1/converter', routes);

app.use('/v1/test/', routes);
app.use('/v1/pexels', routes);
export default app;
