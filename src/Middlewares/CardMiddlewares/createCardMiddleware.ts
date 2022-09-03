import {Request, Response, NextFunction} from 'express';
import schemaValidator from '../handleSchemasValidations';
import apiKeySchema from '../../Schemas/apiKeySchema';

export default function CreateCardMiddleware(req: Request, res: Response, next: NextFunction){
	schemaValidator({'api-key': req.headers['x-api-key']}, apiKeySchema);
	next();
}