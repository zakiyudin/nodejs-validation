import Joi from 'joi';

describe('Joi', () => {
  it('should can custom validation', () => {
    const loginSchema = Joi.object({
        username: Joi.string().min(5).max(100).email().required().messages({
            'any.required': `{{ #label }} haruss diisi`,
            'string.email' : `{{ #label }} harus valid `,
            'string.min': `{{ #label }} harus lebih dari {{ #limit }} karakter`,
            'string.max': `{{ #label }} harus kurang dari {{ #limit }} karakter`,
        }),
        password: Joi.string().min(5).max(8).required().messages({
            'any.required': `{{ #label }} haruss diisi`,
            'string.min': `{{ #label }} harus lebih dari {{ #limit }} karakter`,
            'string.max': `{{ #label }} harus kurang dari {{ #limit }} karakter`,
            'number': `{{ #label }} harus nomor`
        })
    })

    const request = {
        username: 'zaki@mail.com',
        password: 'hahaaj'
    }

    const result = loginSchema.validate(request, {
        abortEarly: false
    })

    console.info(result)
  })
})
