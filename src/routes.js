import { Router } from 'express';
/* Controllers */
import UsersController from './app/controllers/UsersController';
import SessionsController from './app/controllers/SessionsController';

const routes = new Router();

routes.post('/sessions', SessionsController.store);
routes.post('/users', UsersController.store);

export default routes;
