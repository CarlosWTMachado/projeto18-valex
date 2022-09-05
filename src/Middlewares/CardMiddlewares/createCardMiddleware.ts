import {Request, Response, NextFunction} from 'express';
import schemaValidator from '../handleSchemasValidations';
import apiKeySchema from '../../Schemas/apiKeySchema';
import createCardSchema from '../../Schemas/createCardSchema';

export default function CreateCardMiddleware(req: Request, res: Response, next: NextFunction){
	schemaValidator({'api-key': req.headers['x-api-key']}, apiKeySchema);
	schemaValidator(req.body, createCardSchema);
	next();
}