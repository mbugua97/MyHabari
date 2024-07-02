//app dependacies
import  {Router} from "express"

//user controllers
import { Users,User,RegisterUser,UpdateUser,DeleteUser} from "../../controllers/appuser.controller.mjs"
const AppUser = Router()


//getting  all userUsers
//protected for only Super admin User
AppUser.get('/api/v1/users',Users)


//getting one user by id
AppUser.get('/api/v1/user',User)


//registering
AppUser.post('/api/v1/user', RegisterUser)


//updating
AppUser.patch('/api/v1/user',UpdateUser)

//updating
AppUser.delete('/api/v1/user',DeleteUser)

export default AppUser