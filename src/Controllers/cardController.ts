import { Request, Response } from 'express';
import * as cardService from '../Services/cardService';

export async function CreateCard(req: Request, res: Response){
	const {employeeId, type} = req.body;
	const apiKey = req.headers['x-api-key']?.toString() || '';
	
	const card = await cardService.CreateCard(apiKey, Number(employeeId), type);

	return res.status(201).send(card);
}