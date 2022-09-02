import {Request, Response, NextFunction} from 'express';

export default function CardMiddleware(req: Request, res: Response, next: NextFunction){
	
	next();
}