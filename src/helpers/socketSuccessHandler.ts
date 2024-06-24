import { Response } from "express";

const SocketSuccessHandler = {
  successWithMessage(statusCode: number, message: string) {
    return { message, status: "success", code: statusCode };
  },

  successWithData(statusCode: number, data: any) {
    return { data, status: "success", code: statusCode };
  },

  successWithMessageAndData(statusCode: number, message: string, data: any) {
    return {
      data,
      message,
      status: "success",
      code: statusCode,
    };
  },
};

export default SocketSuccessHandler;
