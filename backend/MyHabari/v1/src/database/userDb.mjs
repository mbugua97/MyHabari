//app dependancies
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception: ${err} `);
  process.exit(1);
});

//fetching all users

export const  UsersList=async (req,res)=>{
  try {
    const users = await prisma.Users.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };

  //fetching a single user
export const  user=async (req,res)=>{
    try {
      const { query: {User_id } } = req;
      const parsedId = parseInt(User_id);

      const user = await prisma.Users.findUnique({
        where: { id: parsedId },
      });

      if (!user) {
        res.status(404).send("User not found");
        return;
      }
  
      res.json(user);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    };
    
  

export const AddUser = async (NewUser) => {
      try {
        const createdUser = await prisma.Users.create({
          data: NewUser,
        });
        console.log(createdUser);
        return createdUser;
      
      } catch (error) {
        console.error(`Error adding user: ${error.message}`);
        throw error;
      }
    };



export const patchUser = async (req, res) => {
    const { query: {User_id } } = req;
    const parsedId = parseInt(User_id);

      const { Name, Email, Password, Admin } = req.body;
    
      try {
        const updateData = {
          ...(Name && { Name }),
          ...(Email && { Email }),
          ...(Password && { Password }),
          ...(Admin !== undefined && { Admin }),
        };
  
        const updatedUser = await prisma.Users.update({
          where: { id: parsedId }, 
          data: updateData,
        });
        res.status(200).json(updatedUser);
      } catch (error) {
      res.status(500).json({ error: error.message });
      }
    };






 //deleting a user   
export const deleteuser  = async (req,res)=> {
  try {
    const { query: {User_id } } = req;
    const parsedId = parseInt(User_id);

    const user = await prisma.Users.delete({
      where: { id: parsedId },
    });

    res.status(200).json({ message: 'User deleted successfully',user });
  } catch (error) {
    // Handle potential errors, such as the user not being found
    res.status(500).json({ error: error.message });
  }
};
