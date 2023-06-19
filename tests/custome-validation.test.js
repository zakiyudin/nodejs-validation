import Joi from 'joi';

describe('Joi', () => {
  it('should can create custom validation', () => {
    const registerScchema = Joi.object({
        username: Joi.string().required().min(5).max(100).email(),
        password: Joi.string().required().min(5).max(100).custom((value, helpers) => {
            if (value.startsWith('zaki')) {
                return helpers.error('password.wrong')
            }
            return value
        }).messages({
            'password.wrong': 'password wrong start with zaki'
        }),
        confirmPassword: Joi.string().required().min(5).max(100),
    }).custom((value, helpers) => {
        if (value.password !== value.confirmPassword) {
            return helpers.error('register.password.different')
        }
        return value
    }).messages({
        'register.password.different': 'password & confirmPassword is different'
    })

    const request = {
        username: 'aku@mail.com',
        password: 'aku12345',
        confirmPassword: 'aku1234'
    }

    const result = registerScchema.validate(request, {
        abortEarly: false
    })

    console.info(result)
  })
})
