import {Router} from "express"
import AppUser from "./UserRoutes/appUser.routes.mjs";
import NewsCategory from "./NewsContent/Categories/news.Categories.mjs";
import NewsContent from "./NewsContent/newsContent/news.content.mjs";
const router = Router()

//app user routes
router.use(AppUser)
//news category news
router.use(NewsCategory)

router.use(NewsContent)


export default router