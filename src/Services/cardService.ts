import company from '../Repositories/companyRepository';
import employee from '../Repositories/employeeRepository';
import {TransactionTypes} from '../Repositories/cardRepository';
import cards from '../Repositories/cardRepository';
import { faker } from '@faker-js/faker';
import Cryptr from 'cryptr';
import { CRYPTRKEY } from '../environmentVariable';
import dayjs from 'dayjs';

export async function VerifyCardOwner(apiKey: string){
	const companyFound = await company.findByApiKey(apiKey);
	if(companyFound === undefined) throw{
		type: 'Unauthorized', 
		message: 'Unauthorized'
	};
	return companyFound;
}

export async function VerifyEmployee(id: number) {
	const employeeFound = await employee.findById(id);
	if(employeeFound === undefined) throw{
		type: 'NotFound', 
		message: 'Employee not found'
	};
	return employeeFound;
}

export async function VerifyEmployeeCardType(type: TransactionTypes, employeeId: number) {
	const cardFound = await cards.findByTypeAndEmployeeId(type, employeeId);
	if(cardFound !== undefined) throw{
		type: 'Conflict', 
		message: 'Employee alredy has this card type'
	}
}

export function FormatName(name: string) {
	const formatedName: string[] = [];
	const names: string[] = name.split(" ");
	names.forEach((value: string, index: number) => {
		if(value.length > 2){
			if(index === 0 || index === names.length-1) formatedName.push(value)
			else formatedName.push(value[0])
		}
	});
	return formatedName.join(' ');
}

export async function CreateCard(apiKey: string, employeeId: number, type: TransactionTypes){
	const cryptr = new Cryptr(CRYPTRKEY());
	
	const companyFound = await VerifyCardOwner(apiKey);
	const employeeFound = await VerifyEmployee(employeeId);
	if(employeeFound.companyId !== companyFound.id) throw {
		type: 'Unauthorized', 
		message: 'employee is not registred in this company'
	};

	await VerifyEmployeeCardType(type, employeeId);
	const cardholderName = FormatName(employeeFound.fullName);
	const date = dayjs().add(5, 'y').format('MM/YY');
	const cardNumber = faker.finance.creditCardNumber();
	const cardCVC = faker.finance.creditCardCVV();
	const encryptedCVC = cryptr.encrypt(cardCVC);

	const createdCard = {
		employeeId,
		number: cardNumber,
		cardholderName,
		securityCode: encryptedCVC,
		expirationDate: date,
		isVirtual: false,
		isBlocked: false,
		type
	};

	await cards.insert(createdCard);

	return({...createdCard, securityCode: cardCVC});
}

export async function VerifyCardExists(id: number){
	const cardFound = await cards.findById(id);
	if(cardFound === undefined) throw{
		type: 'NotFound', 
		message: 'Card not found'
	};
	return cardFound;
}

function isExpired(month: number, year: number){
	const [currentMonth, currentYear] = dayjs().format('MM/YY').split('/');
	if(Number(currentYear) < year) return false;
	if(Number(currentYear) === year)
		if(Number(currentMonth) <= month)
			return false;
	return true;
}

export async function ActivateCard(cardId: number, cvc: number, password: string){
	const {expirationDate} = await VerifyCardExists(cardId);

	const [month, year] = expirationDate.split('/');
	if(isExpired(Number(month), Number(year))) throw{
		type: 'NotAcceptable', 
		message: 'Card is expired'
	};

	
}