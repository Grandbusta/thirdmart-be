import { Router } from "express"
import joiMiddleware from "../middlewares/joi_middleware"
import createProject from "../controllers/projects/createProject"
import {createProjectSchema} from "../../validations/project"
const route = Router()

export default function projectRouter(app: Router) {
    app.use("/projects", route)

    route.post("/create",joiMiddleware(createProjectSchema),createProject)
}