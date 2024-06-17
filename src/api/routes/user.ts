import { Router } from "express"
import connectUser from "../controllers/user/connectUser"
import joiMiddleware from "../middlewares/joi_middleware"
import connectUserSchema from "../../validations/user/connectUser"
const route = Router()

export default function userRouter(app: Router) {
    app.use("/user", route)

    route.post("/connect",joiMiddleware(connectUserSchema),connectUser)
}