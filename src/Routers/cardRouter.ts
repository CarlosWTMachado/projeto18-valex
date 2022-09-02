import { Router } from 'express';
import {CreateCard} from '../Controllers/cardController';
import CardMiddleware from '../Middlewares/cardMiddleware';

const cardRouter = Router();

cardRouter.post('/create/card', CardMiddleware, CreateCard);

export default cardRouter;