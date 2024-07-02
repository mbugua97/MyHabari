import  {Router} from "express"
const AppUser = Router()


//getting  all userUsers
//protected for only Super admin User
AppUser.get('/api/v1/user', (req, res) => {
    res.send("get all users")
})


//getting one user
AppUser.get('/api/v1/user/:id', (req, res) => {
    res.send("get one user")
})


//registering
AppUser.post('/api/v1/user', (req, res) => {
    res.send("register a user")
})


//updating
AppUser.patch('/api/v1/user', (req, res) => {
    res.send("update a user")
})

//updating
AppUser.delete('/api/v1/user', (req, res) => {
    res.send("delete a user")
})

export default AppUser