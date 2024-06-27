import Joi from "joi";

export const createProjectSchema = Joi.object({
  name: Joi.string(),
  title: Joi.string(),
  description: Joi.string(),
  chainId: Joi.string().required(),
  logoUrl: Joi.string(),
  theme: Joi.string(),
  userId: Joi.string().uuid().required(),
  useSmartWallet: Joi.boolean(),
}).required();

export const updateProjectSchema = Joi.object({
  name: Joi.string(),
  title: Joi.string(),
  description: Joi.string(),
  chainId: Joi.string(),
  logoUrl: Joi.string(),
  theme: Joi.string(),
  useSmartWallet: Joi.boolean(),
  properties: Joi.object()
}).required();

export const getProjectsQuery = Joi.object({
  userId: Joi.string().required(),
  page: Joi.number(),
  size: Joi.number(),
});
