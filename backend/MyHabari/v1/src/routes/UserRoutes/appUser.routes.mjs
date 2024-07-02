//app dependacies
import  {Router} from "express"

//validating the body 
import { UserEndpointbodyValidator,LogginValidator,UserEndpointquerryValidator  } from "../../validators/user.endpointValidator.mjs"
//user controllers
import { Users,User,RegisterUser,UpdateUser,DeleteUser,LoginUser} from "../../controllers/appuser.controller.mjs"

//middleware
import hashPasswordMiddleware from "../../middleware/passwordhasher.mjs"


const AppUser = Router()


//getting  all userUsers

//protected for only Super admin User
AppUser.get('/api/v1/users',Users)


//getting one user by id
AppUser.get('/api/v1/user',UserEndpointquerryValidator,User)


//registering
AppUser.post('/api/v1/user',UserEndpointbodyValidator,hashPasswordMiddleware,RegisterUser)


//updating
AppUser.patch('/api/v1/user',UserEndpointquerryValidator,UpdateUser)

//deleting
AppUser.delete('/api/v1/user',UserEndpointquerryValidator ,DeleteUser)

//loggin a user
AppUser.post('/api/v1/user/login',LogginValidator,LoginUser)



export default AppUser