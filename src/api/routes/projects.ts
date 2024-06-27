import { Router } from "express";
import joiMiddleware, {
  joiQueryMiddleware,
} from "../middlewares/joi_middleware";
import createProject from "../controllers/projects/createProject";
import {
  createProjectSchema,
  getProjectsQuery,
  updateProjectSchema,
} from "../../validations/project";
import getProjects from "../controllers/projects/getProjects";
import getProject from "../controllers/projects/getProject";
import updateProject from "../controllers/projects/updateProject";
const route = Router();

export default function projectRouter(app: Router) {
  app.use("/projects", route);

  route.post("/create", joiMiddleware(createProjectSchema), createProject);
  route.get("/", joiQueryMiddleware(getProjectsQuery), getProjects);
  route.get("/:projectId", getProject);
  route.patch("/:projectId", joiMiddleware(updateProjectSchema), updateProject);
}
