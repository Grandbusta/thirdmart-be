import { Router } from "express"
import addUser from "../controllers/user/createUser"
import joiMiddleware from "../middlewares/joi_middleware"
import createUserSchema from "../../validations/user/createUser"
const route = Router()

export default function userRouter(app: Router) {
    app.use("/user", route)

    route.post("/add",joiMiddleware(createUserSchema),addUser)
}