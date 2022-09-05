import {Request, Response, NextFunction} from 'express';

interface Error{
	type: string;
	message: string;
}

export default function errorHandlingMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
	if (error.type === "NotFound") return res.status(404).send(error.message);
	if (error.type === "BadRequest") return res.status(400).send(error.message);
	if (error.type === "Unauthorized") return res.status(401).send(error.message);
	if (error.type === "Conflict") return res.status(409).send(error.message);

	return res.status(500).send('Internal error');
}