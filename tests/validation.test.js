import Joi from "joi"

describe("Joi", () => {
    it("should can create schema ", () => {
        const schema = Joi.string().min(2).max(10).required()

        const result = schema.validate("coba")

        if (result.error) {
            console.info(result.error)
        }
    })

    it("should can validate basic data type", () => {
        const usernameSchema = Joi.string().min(5).max(50).required()
        const isAdminSchema = Joi.boolean().required()
        const priceSchema = Joi.number().min(1000).max(1000000).required()

        const resultUsername = usernameSchema.validate("kamil")
        console.log(resultUsername)

        const resultIsAdminSchema = isAdminSchema.validate("true")
        console.log(resultIsAdminSchema)

        const resultPriceSchema = priceSchema.validate(50000)
        console.log(resultPriceSchema)
    })
})