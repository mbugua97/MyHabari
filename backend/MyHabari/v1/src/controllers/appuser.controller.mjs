//app dependancy
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import {
  UsersList,
  user,
  AddUser,
  patchUser,
  deleteuser,
  LogUser,
} from "../database/userDb.mjs";

//getting  all app users
export const Users = UsersList;

//getting specific app user
export const User = user;

//registering a user
export const RegisterUser = async (req, res) => {
  //checking if errors exist in the body validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { Name, Email, Password, Admin } = req.body;
  try {
    const newuser = {
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
export const UpdateUser = patchUser;

//deleting app user
export const DeleteUser = deleteuser;







//login in a user to set a cookie

export const LoginUser = async (req, res) => {
  // Check if there are validation errors in the request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { Email, Password } = req.body;
    const user = {
      Email,
      Password,
    };

    const Loggeduser = await LogUser(user);

    if (Loggeduser == null) {
      return res.status(404).json({ message: "Check username " });
    }
    const isMatch = await bcrypt.compare(Password, Loggeduser.Password);
    if (isMatch) {
      // Login successful

      // JWT with the user ID
      const JWT_SECRET=process.env.JWT_SECRET
      const token = jwt.sign({ id: Loggeduser.id }, JWT_SECRET, { expiresIn: "10m" }); // Token expires in 1 hour
      // Set the JWT as a cookie
      res.cookie("MH_TkN", token, { httpOnly: true, secure: false }); // Set secure: true in production with HTTPS

      return res.status(200).json({ message: "Successful login" });
    } else {
      // Password mismatch
      return res.status(404).json({ message: "Check  password" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
