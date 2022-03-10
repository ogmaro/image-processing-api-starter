import { Router } from 'express';
import converter from './converter';
const routes = Router();


routes.use('/', converter);


export default routes;
