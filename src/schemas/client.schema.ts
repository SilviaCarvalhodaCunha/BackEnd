import { z } from 'zod';

const clientSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  telephone: z.string().max(15),
  dateRegistration: z.string(),
});

const clientRequestSchema = clientSchema.omit({
  id: true, 
  dateRegistration: true
});

const clientResponseSchema = clientSchema.omit({
  password:true
});

const clientUpdateSchema = clientRequestSchema.partial()


export { clientSchema, clientRequestSchema, clientResponseSchema, clientUpdateSchema };
