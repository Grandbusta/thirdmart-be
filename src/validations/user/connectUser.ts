import Joi from "joi";

const connectUserSchema=Joi.object({
    wallet_address:Joi.string().required()
})

export default connectUserSchema