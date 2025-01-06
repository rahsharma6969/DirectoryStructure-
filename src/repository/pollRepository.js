import { Poll } from "../schema/pollSchema.js";

export async function createPoll(details) {
   try {
     const poll = await Poll.create({
       title: details.title,       // Correctly set title
       options: details.options,   // Correctly set options
       createdBy: details.createdBy, // Ensure createdBy is passed as an ObjectId
       expiryDate: details.Validity
     });
     return poll;
   } catch (error) {
     throw error;
   }
}
