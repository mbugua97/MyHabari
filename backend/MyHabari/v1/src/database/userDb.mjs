//app dependancies
import { PrismaClient } from '@prisma/client';
import { validationResult } from 'express-validator';



const prisma = new PrismaClient();

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught exception: ${err} `);
  process.exit(1);
});

//fetching all users

export const  UsersList=async (req,res)=>{
  try {
    const users = await prisma.Users.findMany({
      //abstracting the password
      select: {
        id: true,
        Name: true,
        Email: true,
        Admin: true,
      }}
    );
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  };

  //fetching a single user
export const  user=async (req,res)=>{
  const errors = validationResult(req)    
  if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
  }
    try {
      const User_id=req.User_id 
      const parsedId = parseInt(User_id);

      const user = await prisma.Users.findUnique({
        where: { id: parsedId },
        //abstracting the password
        select: {
          id: true,
          Name: true,
          Email: true,
          Admin: true,
        },
      });

      if (!user) {
        res.status(404).send({"message":"User not found"});
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
          select: {
            id: true,
            Name: true,
            Email: true,
            Admin: true,
          },
        });
        return createdUser;
      
      } catch (error) {
        throw error;
      }
    };



export const patchUser = async (req, res) => {

  const errors = validationResult(req)    
  if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
  }

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
          select: {
            id: true,
            Name: true,
            Email: true,
            Admin: true,
          },
        });
        res.status(200).json(updatedUser);
      } catch (error) {
      res.status(500).json({message:"user not found"});
      }
    };






 //deleting a user   
export const deleteuser  = async (req,res)=> {

  //vaidating the user id querry params
  const errors = validationResult(req)    
  if(!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
  }


  try {
    const { query: {User_id } } = req;
    const parsedId = parseInt(User_id);
    const user = await prisma.Users.delete({
      where: { id: parsedId },
    });
    res.status(200).json({ message: 'User deleted successfully',user });
  } catch (error) {
    res.status(500).json({ message:"user not found" });
  }
};


//check password and password
export const LogUser = async (user) => {
  try {
    const LoggedUser = await prisma.Users.findUnique({
      where: { Email: user.Email }
    });
    return LoggedUser;
  
  } catch (error) {
    throw error;
  }
};

