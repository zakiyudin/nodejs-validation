import Joi from 'joi';

describe('Joi', () => {
  it('should can list validation error', () => {
    const emailSchema = Joi.string().email().min(5).required()

    const result = emailSchema.validate('ha', {
        abortEarly: false
    })
    console.log(result.value);

    if (result.error) {
        result.error.details.forEach(detail => {
            console.log(`${detail.message}`);
        })
    }
  })
})
