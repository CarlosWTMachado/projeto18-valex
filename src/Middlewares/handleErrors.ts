import {Request, Response, NextFunction} from 'express';

interface Error{
	type: string;
	message: string;
}

export default function errorHandlingMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
	if (error.type === "NotFound") return res.status(404).send(error.message);

	return res.status(500).send('Internal error');
}