import {Request, Response, NextFunction} from 'express';
import schemaValidator from '../handleSchemasValidations';
// import apiKeySchema from '../../Schemas/apiKeySchema';
import activateCardSchema from '../../Schemas/activateCardSchema';

export default function ActivateCardMiddleware(req: Request, res: Response, next: NextFunction){
	// schemaValidator({'api-key': req.headers['x-api-key']}, apiKeySchema);
	schemaValidator(req.body, activateCardSchema);
	next();
}