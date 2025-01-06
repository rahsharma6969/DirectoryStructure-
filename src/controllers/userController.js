import { log } from "node:console";
import { signupUserService, signinUserService } from "../service/userService.js";

export async function signup(req, res) {
  try {
    console.log(req.body);
    const createdNewUser = await signupUserService(req.body);

    if (!createdNewUser) {
      return res.status(400).json({
        success: false,
        message: "Unable to create new user",
      });
    }

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: createdNewUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}

export async function signin(req, res) {
  try {
    const response = await signinUserService(req.body);
    if (!response) {
      // agar null response aaya to user nahi mila
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

      return res.status(200).json({
        message: "User logged in successfully",
        data: response
      });
    }
   catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}
