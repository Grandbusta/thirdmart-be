import Joi from "joi";

const createUserSchema=Joi.object({
    wallet_address:Joi.string().required()
})

export default createUserSchema