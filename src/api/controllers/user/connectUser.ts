import { Request, Response } from "express";
import ErrorHandler from "../../../helpers/errHandler";
import SuccessHandler from "../../../helpers/successHandler";
import { addUser, getUserByWalletAddress } from "../../../db/queries/user";

export default async function connectUser(req: Request, res: Response) {
  try {
    const { walletAddress } = req.body;
    let user = {};
    const existingUser = await getUserByWalletAddress(walletAddress);
    if (!existingUser) {
      const newUser = await addUser(walletAddress);
      user = {
        isNewUser: true,
        ...newUser,
      };
    } else {
      user = {
        ...existingUser,
        isNewUser: false,
      };
    }
    return SuccessHandler.successWithMessageAndData(
      res,
      200,
      "User connected successfully",
      user,
    );
  } catch (error) {
    console.error(error);
    return ErrorHandler.serverResponse(res, "An Error occured", 500);
  }
}
