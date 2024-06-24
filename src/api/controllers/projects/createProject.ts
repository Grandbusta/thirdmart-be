import { Request, Response } from "express";
import ErrorHandler from "../../../helpers/errHandler";
import SuccessHandler from "../../../helpers/successHandler";
import { addProject } from "../../../db/queries/project";
import { ProjectThemes } from "../../../common/constants";

export default async function createProject(req: Request, res: Response) {
  try {
    const project = await addProject({
      theme: req.body.theme ?? ProjectThemes.DEFAULT,
      ...req.body,
    });

    return SuccessHandler.successWithMessageAndData(
      res,
      200,
      "Project created successfully",
      project,
    );
  } catch (error) {
    console.error(error);
    return ErrorHandler.serverResponse(res, "An Error occured", 500);
  }
}
