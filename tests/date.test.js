import Joi from "joi"

describe('Joi', () => {
  it('should can validate date', () => {
    const birthdaySchema = Joi.date().required().max("now").min("1-1-1999")

    const result = birthdaySchema.validate("1-1-1998")
    console.log(result)

    const result2 = birthdaySchema.validate("1-1-2005")
    console.log(result2)

    const result3 = birthdaySchema.validate("1-1-2030")
    console.log(result3);
  })
})
