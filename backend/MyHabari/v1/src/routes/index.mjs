import {Router} from "express"
import AppUser from "./UserRoutes/appUser.routes.mjs";


const router = Router()


router.use(AppUser)

export default router