import { z } from 'zod';

export const pollValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  
  options: z.array(
    z.object({
      option: z.string().min(1, "Option is required"),
      votes: z.number().default(0).optional(), // Optional and defaults to 0
    })
  ).min(1, "At least one option is required"),

  createdBy: z.string().min(1, "CreatedBy is required"),

  validity: z
    .union([z.instanceof(Date), z.string()])
    .refine((val) => {
      // Convert string to Date if it's in string format
      const date = typeof val === 'string' ? new Date(val) : val;
      return !isNaN(date.getTime()) && date > new Date();
    }, {
      message: "Validity must be a valid date in the future",
    }),
});
