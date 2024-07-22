import  {Router} from "express"


//admin validator middleware
import { UserAdminValidator,UserValidator } from "../../../middleware/adminValidator.mjs"

import { Newnewscontent,News, deletecontent, newsBycategory,newsByowner,Ownernews } from "../../../controllers/newscontent.controller.mjs"

import { AdminorOwnerValidator } from "../../../middleware/adminValidator.mjs"


import { categoryid } from "../../../middleware/categories.middleware.mjs"
const NewsContent = Router()

//data fetch pagination

NewsContent.get('/content',UserValidator,News)

NewsContent.post('/content',UserValidator,Newnewscontent)

//getting by category
NewsContent.get('/content/category/:id',UserValidator,categoryid,newsBycategory)


//getting by user id
NewsContent.get('/content/owner/:id',UserValidator,categoryid,newsByowner)


//getting my news
NewsContent.get('/content/self/:id',UserValidator,categoryid,Ownernews)


NewsContent.patch('/content/:id',AdminorOwnerValidator,(req,res)=>{
    res.send("you updated news")
})



NewsContent.delete('/content/:id',AdminorOwnerValidator,categoryid,deletecontent)


export default NewsContent