//app dependacies
import  {Router} from "express"
//validating the body 
import { UserEndpointbodyValidator,LogginValidator,UserEndpointquerryValidator  } from "../../validators/user.endpointValidator.mjs"
//user controllers
import { Users,User,RegisterUser,UpdateUser,DeleteUser,LoginUser,LogOutUser} from "../../controllers/appuser.controller.mjs"

//admin validator middleware
import {UserAdminValidator,UserValidator,UserById} from "../../middleware/adminValidator.mjs"

//middleware
import hashPasswordMiddleware from "../../middleware/passwordhasher.mjs"

const AppUser = Router()

//getting  all userUsers

//protected for only Super admin User
AppUser.get('/api/v1/users',UserAdminValidator,Users)

//getting one user
AppUser.get('/api/v1/user/:id',UserAdminValidator,UserById,User)

//getting logged user
AppUser.get('/api/v1/user',UserValidator,User)

//registering a user
AppUser.post('/api/v1/user',UserEndpointbodyValidator,hashPasswordMiddleware,RegisterUser)

//updating a user
AppUser.patch('/api/v1/user',UserAdminValidator,UserEndpointquerryValidator,UpdateUser)

//deleting a user
AppUser.delete('/api/v1/user',UserAdminValidator,UserEndpointquerryValidator ,DeleteUser)

//loggin a user
AppUser.post('/api/v1/user/login',LogginValidator,LoginUser)

//loggout a user
AppUser.post('/api/v1/user/logout',LogOutUser)




export default AppUser