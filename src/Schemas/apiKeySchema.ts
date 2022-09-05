import joi from 'joi';

const apiKeySchema = joi.object({
	'api-key': joi.string().required()
});

export default apiKeySchema;