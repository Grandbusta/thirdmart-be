import { Response } from "express";

const ErrorHandler = {
  validationError: (res: Response, error: Error) =>
    res.status(400).json({
      status: "error",
      message: error.message,
    }),
  serverResponse: (res: Response, message: string, status: number) =>
    res.status(status).json({
      status: "error",
      message,
    }),
};

export default ErrorHandler;
