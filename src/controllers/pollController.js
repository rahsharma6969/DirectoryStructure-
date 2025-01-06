import { log } from "node:console";
import { createPollService } from "../service/pollService.js";

export async function createPollRepo(req, res) {
    try {
        // Destructure the necessary fields from req.body and req.user
        const { title, options, validity } = req.body;
        const { _id: createdBy } = req.user;  // Destructure createdBy (user ID) from req.user
        
        // Prepare the poll data to be passed
        const pollData = { title, options, createdBy,validity };

        // Call the service
        const poll = await createPollService(pollData);

        if (!poll) {
            return res.status(400).json({ message: "Poll creation failed" });
        }

        return res.status(201).json({
            message: "Poll created successfully",
            success: true,
            data: poll,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
