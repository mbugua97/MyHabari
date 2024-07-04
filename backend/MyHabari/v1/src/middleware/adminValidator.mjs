// mjs/UserAdminValidator.js
import jwt from 'jsonwebtoken';
import { query } from 'express';

export const UserAdminValidator = async (req, res, next) => {
    if (req.signedCookies.MH_TkN) {
        const token = req.signedCookies.MH_TkN;
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify and decode the token
            if (decoded && decoded.user.Admin === true) {
                next();
            } else {
                return res.status(401).json({ message: 'Only Admin allowed' });
            }
        } catch (error) {
           return  res.status(401).json({ message: 'expired token login again' });
        }
    } else {
       return res.status(401).json({ message: 'Please log in' });
    }
};

export const UserValidator = async (req, res, next) => {
  if (req.signedCookies.MH_TkN) {
      const token = req.signedCookies.MH_TkN;
      try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify and decode the token
          req.User_id=decoded.user.id
          next();
      } catch (error) {ext();
         return  res.status(401).json({ message: 'expired token login again' });
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