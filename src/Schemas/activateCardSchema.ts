import joi from 'joi';

const activateCardSchema = joi.object({
	'cardId': joi.number().required(),
	'cvc': joi.number().required(),
	'password': joi.string().pattern(/^[0-9]{4}$/).required()
});

export default activateCardSchema;