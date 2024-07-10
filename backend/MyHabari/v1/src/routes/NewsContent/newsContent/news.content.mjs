import  {Router} from "express"


//admin validator middleware
import { UserAdminValidator,UserValidator } from "../../../middleware/adminValidator.mjs"

const NewsContent = Router()


//protected for only Super admin User
NewsContent.get('/content',UserValidator,(req,res)=>{
    res.send("you fetched all news ")
})

NewsContent.post('/content',UserValidator,(req,res)=>{
    res.send("you posted news ")
})


NewsContent.get('/content/:id',UserValidator,(req,res)=>{
    res.send("you fetched specific news")
})


NewsContent.patch('/content/:id',UserValidator,(req,res)=>{
    res.send("you updated news")
})

NewsContent.delete('/content/:id',UserValidator,(req,res)=>{
    res.send("you  delete news")
})


export default NewsContent