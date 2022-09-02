import joi from 'joi';

const apiKeySchema = joi.object({
	'x-api-key': joi.string().required()
});

export default apiKeySchema;