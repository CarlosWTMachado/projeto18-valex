import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import Cryptr from 'cryptr';
import { CRYPTRKEY } from '../environmentVariable';

export function CreateCard(req: Request, res: Response){
	const {employeeId, type} = req.body;
	const cardNumber = faker.finance.creditCardNumber();
	const cardCVC = faker.finance.creditCardCVV();
	const date = dayjs().add(5, 'y').format('MM/YY');
	const cryptr = new Cryptr(CRYPTRKEY());
	const encryptedCVC = cryptr.encrypt(cardCVC);

	// throw {type: 'NotFound', message: 'teste de erro'};

	return res.status(200).send({employeeId, type, cardNumber, cardCVC, date, encryptedCVC});
}