// After /users the remainaing part of url is handled here
import express from 'express';
import { signup, signin } from '../../controllers/userController.js';
import { validate } from '../../validator/validator.js';
import { zodSignupSchema } from '../../validator/zodSignupvalidator.js';
import { zodSigninSchema } from '../../validator/zodSigninvalidator.js';
const router = express.Router();

// router.get('/profile', getProfile);



router.post('/signup',validate(zodSignupSchema), signup);


router.post('/signin', validate(zodSigninSchema), signin);

export default router;