import express, { json } from 'express';
import cors from 'cors';
import {APPLICATIONPORT} from './environmentVariable';
// import AuthRouter from './Routers/authRouter.js';

const server = express();
server.use(cors());
server.use(json());

// server.use(AuthRouter);

const PORT = APPLICATIONPORT() || 5000;
server.listen(PORT, () => {
	console.log(`Rodando na porta: ${PORT}`);
});