import express from 'express';
import { pollValidationSchema } from '../../validator/zodPollvalidator.js';
import { validate } from '../../validator/validator.js';
import { createPollRepo } from '../../controllers/pollController.js';
import { isAuthenticated } from '../../middleware/authMiddleware.js';

const router = express.Router();

// Route to create a poll
router.post("/createpoll", isAuthenticated, validate(pollValidationSchema), createPollRepo);

export default router;
