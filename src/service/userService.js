import { log } from "node:console";
import { createUser, findUserByEmail } from "../repository/userRepository.js";
import bcrypt from 'bcryptjs';

import { generateJwtToken } from "../utils/jwt.js";

export async function signupUserService(userdetails) {
  try {
    const user = await createUser(userdetails);
    return user;
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      /// duplicate email already exist
      throw {
        status: 400,
        message: "User with the same email or username already exists",
      };
    }
    throw error;
  }
}

export async function signinUserService(userDetails) {
  try {
    //check if the user with that email exist or not
    const userId = userDetails.email;
    const user = await findUserByEmail(userId);
    if (!user) {
      throw {
        status: 400,
        message: "Invalide email",
      };
    }
    //check the password of the user is correct or not
    const isValidPassword = bcrypt.compareSync(
      //compare the pswd with the hashed pswd
      userDetails.password,
      user.password
    );

    if (!isValidPassword) {
      throw {
        status: 400,
        message: "Invalid password",
      };
    }

    const token = await generateJwtToken({
      _id: user._id,
      email: user.email,
      name: user.username,
    });

    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function checkIfUserExists(email)  {
  try {
    const user = await findUserByEmail(email);
    return user;
  } catch (error) {
    throw error;
  }
};
