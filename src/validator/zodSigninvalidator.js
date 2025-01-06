import { z } from 'zod';

export const zodSigninSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(5)
});