import { Request, Response } from "express"
import ErrorHandler from "../../../helpers/errHandler"
import SuccessHandler from "../../../helpers/successHandler"

export default async function createUser(req:Request,res:Response) {
    try {
        const {wallet_address}=req.body
        console.log(wallet_address)
        return SuccessHandler.successWithMessage(res,200,"User created successfully")
    } catch (error) {
        console.error(error)
        return ErrorHandler.serverResponse(res,"An Error occured",500)
    }
}