import { log } from "node:console";
import { verifyJWT } from "../utils/jwt.js";
import { checkIfUserExists } from "../service/userService.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const response = verifyJWT(token);

    const doesUserExist = checkIfUserExists(response.email);

    if (!doesUserExist) {
      return res.status(401).send("Access denied. User not Exist.");
    }

    req.user = response;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
