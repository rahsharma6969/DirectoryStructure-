import { createPoll } from "../repository/pollRepository.js";

export async function createPollService(pollData) {
  try {
    console.log(pollData); // Logs the incoming data for debugging
    const poll = await createPoll(pollData); // Pass pollData as an object

    return poll;
  } catch (error) {
    console.error("Error in createPollService:", error.message);
    throw error;
  }
}
