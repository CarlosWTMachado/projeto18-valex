import company from '../Repositories/companyRepository';
import employee from '../Repositories/employeeRepository';
import {TransactionTypes} from '../Repositories/cardRepository';
import card from '../Repositories/cardRepository';

export async function VerifyCardOwner(apiKey: string){
	const companyFound = await company.findByApiKey(apiKey);
	if(companyFound === undefined) throw{
		type: 'Unauthorized', 
		message: 'Unauthorized'
	};
}

export async function VerifyEmployee(id: number) {
	const employeeFound = await employee.findById(id);
	if(employeeFound === undefined) throw{
		type: 'NotFound', 
		message: 'Employee not found'
	};
}

export async function VerifyEmployeeCardType(type:TransactionTypes, employeeId: number) {
	const cardFound = await card.findByTypeAndEmployeeId(type, employeeId);
	if(cardFound !== undefined) throw{
		type: 'Conflict', 
		message: 'Employee alredy has this card type'
	}
}