export default function schemaValidate (object: any, schema: any) {
	const validate = schema.validate(object);
	if(validate.error) {
		throw {
			type: 'BadRequest',
			message: `Data validation: ${validate.error.details}`
		}
	}
}