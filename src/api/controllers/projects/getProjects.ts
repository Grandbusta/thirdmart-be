import { Request, Response } from "express";
import ErrorHandler from "../../../helpers/errHandler";
import SuccessHandler from "../../../helpers/successHandler";
import { getUserProjects } from "../../../db/queries/project";

export default async function getProjects(req: Request, res: Response) {
  try {
    const {
      page,
      size,
    }: {
      page?: number;
      size?: number;
    } = req.query;
    const userId = req.query.userId as string;
    const projects = await getUserProjects(userId, page, size);
    return SuccessHandler.successWithData(res, 200, projects);
  } catch (error) {
    console.error(error);
    return ErrorHandler.serverResponse(res, "An Error occured", 500);
  }
}
