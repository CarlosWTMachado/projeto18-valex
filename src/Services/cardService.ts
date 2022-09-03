import company from '../Repositories/companyRepository'
export async function VerifyCardOwner(apiKey: string){
	const companyFound = await company.findByApiKey(apiKey);
	if(companyFound === undefined) throw{type: 'NotFound', message: 'Company not found'};
}