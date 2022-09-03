import company from '../Repositories/companyRepository';
import employee from '../Repositories/employeeRepository';

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