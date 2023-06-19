import Joi from 'joi';

describe('Joi', () => {
  it('should be can validate object', () => {
    const loginSchema = Joi.object({
        username: Joi.string().email().min(5).max(100).required(),
        password: Joi.string().min(3).max(10).required(),
        address: Joi.object({
            street: Joi.string().required(),
            postcode: Joi.string().required()
        }).required()
    })

    const request = {
        username: "zaki@mail.com",
        password: "rahasia",
        address: {
            street: "jl.ahmad yani",
            postcode: "61382"
        }
    }

    const result = loginSchema.validate(request, {
        abortEarly: false
    })

    console.info(result)
  })
})
