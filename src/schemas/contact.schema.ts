import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(45),
  email: z.string().email().max(45),
  telephone: z.string().max(15),
  dateRegistration: z.string(),
});

const contactRequestSchema = contactSchema.omit({
  id: true,
  dateRegistration: true,
});

const contactUpdateSchema = contactRequestSchema.partial();

export { contactSchema, contactRequestSchema, contactUpdateSchema };
