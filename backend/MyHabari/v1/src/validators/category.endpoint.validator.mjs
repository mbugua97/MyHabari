import { body,query,header} from "express-validator";
export const categoryEndpointbodyValidator = [
    body("categoryName").notEmpty().withMessage(" categoryName cannot be empty"),
  ];
  