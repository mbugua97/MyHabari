import { body,query,header} from "express-validator";



//validating for the post
export const UserEndpointbodyValidator = [
  body("Name").notEmpty().withMessage("name cannot be empty"),
  body("Email").notEmpty().withMessage("Email cannot be empty"),
  body("Password").notEmpty().withMessage("Password cannot be empty"),
];


export const UserEndpointquerryValidator = [
    query("User_id").notEmpty().withMessage("Querry User_id cannot be empty"),
  ];
  

  export const LogginValidator = [
    body("Email").notEmpty().withMessage("Email cannot be empty"),
    body("Password").notEmpty().withMessage("Password cannot be empty"),
  ];
