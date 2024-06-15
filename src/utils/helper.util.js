import { hash } from "bcrypt";
import { APP_CONFIG } from "../config/index.js";

// Hash the password
export const encryptPassword = async (password) => await hash(password, APP_CONFIG.SALT);


// Joi validation error handler function
export const errorMessages = (field) => {
    return {
        "string.empty": `${field} should not be empty !!`,
        "any.required": `${field} is required !!`,
        "string.email": `Enter Valid ${field} !!`,
    };
};
