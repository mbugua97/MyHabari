import { UsersList,user,AddUser,patchUser,deleteuser } from "../database/userDb.mjs";

//getting  all app users
export const Users=UsersList



//getting specific app user
export const User=user


//registering a user
export const RegisterUser=async (req, res) => {
    const { Name, Email, Password, Admin } = req.body;
    try {
        const newuser= {
            Name,
            Email,
            Password, 
            Admin: Admin || false,
        };
        const createduser = await AddUser(newuser);
        res.status(201).json(createduser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};




//update the app user
export const UpdateUser=patchUser



//deleting app user
export const DeleteUser=deleteuser





