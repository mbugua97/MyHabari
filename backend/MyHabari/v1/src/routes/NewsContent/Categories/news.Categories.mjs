import  {Router} from "express"


//admin validator middleware
import { UserAdminValidator } from "../../../middleware/adminValidator.mjs"


import { News,updatecategory,news,DeleteCategory,Newcategory} from "../../../controllers/newsCategories.controller.mjs"

import { categoryid } from "../../../middleware/categories.middleware.mjs"

import { categoryEndpointbodyValidator } from "../../../validators/category.endpoint.validator.mjs"
const NewsCategory = Router()


//protected for only Super admin User
NewsCategory.get('/category',UserAdminValidator,News)


//addning a new category
NewsCategory.post('/category',UserAdminValidator,categoryEndpointbodyValidator,Newcategory)


//category by id
NewsCategory.get('/category/:id',UserAdminValidator,categoryid,news)

//patching a category
NewsCategory.patch('/category/:id',UserAdminValidator,categoryid,updatecategory)

//deleting a category
NewsCategory.delete('/category/:id',UserAdminValidator,categoryid,DeleteCategory)


export default NewsCategory