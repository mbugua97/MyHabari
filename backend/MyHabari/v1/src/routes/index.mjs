import {Router} from "express"
import AppUser from "./UserRoutes/appUser.routes.mjs";


const router = Router()

//app user routes
router.use(AppUser)

export default router