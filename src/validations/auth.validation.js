import { Joi } from "express-validation";
import { errorMessages } from "../utils/helper.util.js";

export const SIGN_UP = {
    body: Joi.object({
      first_name: Joi.string().required().messages(errorMessages("first_name")),
      last_name: Joi.string().required().messages(errorMessages("last_name")),
      email: Joi.string().email().required().messages(errorMessages("email")),
      password: Joi.string().required().messages(errorMessages("password")),
    }),
  };
  
  export const SIGN_IN = {
    body: Joi.object({
      email: Joi.string().email().required().messages(errorMessages("email")),
      password: Joi.string().required().messages(errorMessages("password")),
    }),
  };
  