import { Router } from "express"
import connectUser from "../controllers/user/connectUser"
import joiMiddleware from "../middlewares/joi_middleware"
import userSchema from "../../validations/user"
const route = Router()

export default function userRouter(app: Router) {
    app.use("/user", route)

    route.post("/connect",joiMiddleware(userSchema),connectUser)
}