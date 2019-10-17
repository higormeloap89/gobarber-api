import { Router } from 'express';
/* Controllers */
import UsersController from './app/controllers/UsersController';
import SessionsController from './app/controllers/SessionsController';
/* Middleware */
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionsController.store);
routes.post('/users', UsersController.store);
/* a proteção de rotas valerá após o middleware global */
routes.use(authMiddleware);
routes.put('/users', UsersController.update);

export default routes;
