import express from 'express';
import userRouter from './user.js';
import pollRouter from './poll.js'
const router = express.Router();



router.use('/users', userRouter); // if in the remaining url i.e. after /api/v1, we have the url starting with /users , then the request is forwarded to userRouter
router.use('/poll',pollRouter);


export default router;