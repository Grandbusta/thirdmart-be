import { Response } from "express";

const SuccessHandler = {
  successWithMessage(res: Response, statusCode: number, message: string) {
    return res.status(statusCode).json({ message, status: "success" });
  },

  successWithData(res: Response, statusCode: number, data: any) {
    return res.status(statusCode).json({ data, status: "success" });
  },

  successWithMessageAndData(
    res: Response,
    statusCode: number,
    message: string,
    data: any,
  ) {
    return res.status(statusCode).json({
      data,
      message,
      status: "success",
    });
  },
};

export default SuccessHandler;
