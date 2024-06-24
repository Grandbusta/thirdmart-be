import Joi from "joi";

const createUserSchema = Joi.object({
  walletAddress: Joi.string().required(),
});

export default createUserSchema;
