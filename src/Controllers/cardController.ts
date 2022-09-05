import { Request, Response } from 'express';
import * as cardService from '../Services/cardService';

export async function CreateCard(req: Request, res: Response){
	const {employeeId, type} = req.body;
	const apiKey = req.headers['x-api-key']?.toString() || '';

	const card = await cardService.CreateCard(apiKey, Number(employeeId), type);

	return res.status(201).send(card);
}

export async function ActivateCard(req: Request, res: Response){
	const {cardId, cvc, password} = req.body;
	await cardService.ActivateCard(cardId, cvc, password);
	return res.status(200).send({cardId, cvc, password});
}