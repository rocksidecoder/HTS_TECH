import { compare } from "bcrypt";
import { supabase } from "../utils/db.util.js";
import { encryptPassword } from "../utils/helper.util.js";

/**
 * Sign up a new user   ->  /api/v1/auth/sign-up
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {object} next Next function
 * @returns New user details
 */
export const signUp = async (req, res, next) => {
    try {
        const { body: payload }= req;

        // check user already exists with provided email or not
        const { data: userExistsWithEmail } = await supabase
            .from('user')
            .select("")
            .eq("email", payload.email)
            .single()
            

        if (userExistsWithEmail) {
            return res.status(409).json({
                status: "error",
                error: { message: "User already exists with email" }
            })
        }

        // encrypt the password
        const hashPassword = await encryptPassword(payload.password) 

        // create new user
        const { data:user, error } = await supabase
            .from('user')
            .insert([{ ...payload, password: hashPassword }])
            .select();

        if (error) {
            return res.status(401).json({
                status: "error",
                error: {
                    message: error.message,
                    statusCode: error.statusCode
                }
            })
        }

        return res.status(201).json({
            status: "successs",
            message: 'User sign up successfully',
            data: user
        });
    } catch (error) {
        next(error)
    }
}

/**
 * Sign in user     -> /api/v1/auth/sign-in
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {object} next Next function
 * @returns Login user details
 */
export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const { data: user, error } = await supabase
            .from('user')
            .select()
            .eq("email", email)
            .single()

        if (error) {
            return res.status(401).json({
                status: "error",
                error: {
                    message: error.message,
                    statusCode: error.statusCode
                }
            })
        }

        // check user exists with provided credentials
        if (!user) {
            return res.status(400).json({
                status: "error",
                error: { message: "Invalid username" }
            })
        }

        // compare password
        const isValidPassword = await compare(password, user.password);
        if(!isValidPassword){
            return res.status(401).json({
                status: "error",
                error:{
                    message: "Invalid password"
                }
            })
        }

        delete user.password;

        return res.status(200).json({
            status: "successs",
            message: 'User login successfully',
            data: user
        });
    } catch (error) {
        next(error)
    }
}