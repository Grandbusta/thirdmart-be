import Joi from "joi";

export const createProjectSchema=Joi.object({
    name:Joi.string(),
    title:Joi.string(),
    chainId:Joi.string().required(),
    logoUrl:Joi.string(),
    theme:Joi.string(),
    userId:Joi.string().uuid().required(),
    useSmartWallet:Joi.boolean()
})

export const updateProjectSchema=Joi.object({
    name:Joi.string(),
    title:Joi.string(),
    chainId:Joi.string(),
    logoUrl:Joi.string(),
    theme:Joi.string(),
    useSmartWallet:Joi.boolean()
})