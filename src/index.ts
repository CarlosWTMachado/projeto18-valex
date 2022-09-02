import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import {APPLICATIONPORT} from './environmentVariable';
import router from './Routers/index';
import errorHandler from './Middlewares/handleErrors';

const server = express();
server.use(cors());
server.use(json());
server.use(router);
server.use(errorHandler);

const PORT = APPLICATIONPORT();
server.listen(PORT, () => {
	console.log(`Rodando na porta: ${PORT}`);
});