import { Router } from 'express';
import {CreateCard} from '../Controllers/cardController';
import CreateCardMiddleware from '../Middlewares/CardMiddlewares/createCardMiddleware';

const cardRouter = Router();

cardRouter.post('/create/card', CreateCardMiddleware, CreateCard);

export default cardRouter;