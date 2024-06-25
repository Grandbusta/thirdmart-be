import { Request, Response } from "express";
import ErrorHandler from "../../../helpers/errHandler";
import SuccessHandler from "../../../helpers/successHandler";
import { getSingleProject } from "../../../db/queries/project";

export default async function getProject(req: Request, res: Response) {
  try {
    const projectId = req.params.projectId as string;
    const project = await getSingleProject(projectId);
    return SuccessHandler.successWithData(res, 200, project);
  } catch (error) {
    console.error(error);
    return ErrorHandler.serverResponse(res, "An Error occured", 500);
  }
}
