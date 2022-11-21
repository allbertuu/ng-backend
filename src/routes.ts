import { Router } from 'express';
import { AuthenticateUserController } from './modules/user/useCases/authenticateUser/AuthenticateUserController';
import { CreateTransactionController } from './modules/transaction/useCases/createTransaction/CreateTransactionController';
import { ListTransactionsController } from './modules/transaction/useCases/listTransactions/ListTransactionsController';
import { CreateUserController } from './modules/user/useCases/createUser/CreateUserController';
import { GetUserAccountController } from './modules/account/useCases/getUserAccount/GetUserAccountController';
import { ListUsersController } from './modules/user/useCases/listUsers/ListUsersController';

const routes = Router();
// Controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const getUserAccountController = new GetUserAccountController();
const listUsersController = new ListUsersController();
// Post
routes.post('/user', createUserController.handle);
routes.post('/session', authenticateUserController.handle);
routes.post('/transaction', createTransactionController.handle);
// Get
routes.get('/transaction', listTransactionsController.handle);
routes.get('/account', getUserAccountController.handle);
routes.get('/user', listUsersController.handle);

export default routes;
