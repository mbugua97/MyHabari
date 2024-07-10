// mjs/UserAdminValidator.js
import jwt from 'jsonwebtoken';
import { query } from 'express';
import { validateownership } from '../database/news.Content.mjs';
export const UserAdminValidator = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // Verify and decode the token
            //checking if admin
            if (decoded.role===true) {
                next();
            } else {
                return res.status(401).json({ message: 'Only Admin allowed' });
            }
        } catch (error) {
           return  res.status(401).json({ message: 'invalid token  again' });
        }
    } else {
       return res.status(401).json({ message: 'Please log in' });
    }
};

export const UserValidator = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(' ')[1];
      try {
          const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // Verify and decode the token
          req.User_id=decoded.userId.id
          next();
      } catch (error) {
         return  res.status(401).json({ message: 'invalid token' });
      }
  } else {
     return res.status(401).json({ message: 'Please log in' });
  }
};

export const UserById = async (req, res, next) => {
   try{
    const id=req.params.id
    req.User_id=req.params.id
    next()
   }
   catch{

    return res.status(401).json({ message: 'Please log in' });
   }
  };


  export const AdminorOwnerValidator = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // Verify and decode the token
            //checking if admin or owner
            const id=parseInt(req.params.id)
            const owner=await validateownership(decoded.userId.id,id)
            if (decoded.role===true||owner===true) {
                next();
            } else {
                return res.status(401).json({ message: 'Only Admin or publisher owner  allowed' });
            }
        } catch (error) {
           return  res.status(401).json({ message: 'invalid token  again' });
        }
    } else {
       return res.status(401).json({ message: 'Please log in' });
    }
};