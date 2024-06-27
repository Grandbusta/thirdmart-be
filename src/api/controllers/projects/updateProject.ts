import { Request, Response } from "express";
import ErrorHandler from "../../../helpers/errHandler";
import SuccessHandler from "../../../helpers/successHandler";
import {
  getSingleProject,
  updateSingleProject,
} from "../../../db/queries/project";

export default async function updateProject(req: Request, res: Response) {
  try {
    const projectId = req.params.projectId as string;
    const body = req.body;
    const project = await getSingleProject(projectId);
    if (!project) {
      return ErrorHandler.serverResponse(res, "Project does not exist", 400);
    }
    const updatedProject = await updateSingleProject(projectId, body);
    return SuccessHandler.successWithData(res, 200, updatedProject);
  } catch (error) {
    console.error(error);
    return ErrorHandler.serverResponse(res, "An Error occured", 500);
  }
}
