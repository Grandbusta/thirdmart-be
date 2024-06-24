import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import ErrorHandler from "../../helpers/errHandler";
const { serverResponse, validationError } = ErrorHandler;

const joiMiddleware = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      return serverResponse(res, message, 422);
    }
  };
};

export const joiQueryMiddleware = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.query);
    const valid = error == null;
    if (valid) {
      req.query = value;
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => "query " + i.message).join(",");
      return serverResponse(res, message, 422);
    }
  };
};

export default joiMiddleware;
