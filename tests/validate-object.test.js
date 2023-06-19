import Joi from 'joi';

describe('Joi', () => {
  it('should be can validate object', () => {
    const loginSchema = Joi.object({
        username: Joi.string().email().min(5).max(100).required(),
        password: Joi.string().min(3).max(10).required()
    })

    const request = {
        username: "zaki@mail.com",
        password: "rahasia"
    }

    const result = loginSchema.validate(request, {
        abortEarly: false
    })

    console.info(result)
  })
})
