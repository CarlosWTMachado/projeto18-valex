import { Router } from 'express';
import {CreateCard, ActivateCard} from '../Controllers/cardController';
import CreateCardMiddleware from '../Middlewares/CardMiddlewares/createCardMiddleware';
import ActivateCardMiddleware from '../Middlewares/CardMiddlewares/activateCardMiddleware';

const cardRouter = Router();

cardRouter.post('/create/card', CreateCardMiddleware, CreateCard);
cardRouter.post('/activate/card', ActivateCardMiddleware, ActivateCard);

export default cardRouter;