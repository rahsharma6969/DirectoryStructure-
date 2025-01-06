import exp from "constants";
import { User } from "../schema/userSchema.js";

export async function createUser(userdetails) {
  try {
    const user = User.create(userdetails);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// export async function findUserByEmail(email) {
//   try {
//     const user = await User.findOne({email});
//     return user;
//   } catch (error) {
//     throw error;
//   }
// }


export const findUserByEmail = async (email) => {
  try {
     const user = await User.findOne({ email });
     return user;
  } catch(error) {
      console.log(error);
  }
}