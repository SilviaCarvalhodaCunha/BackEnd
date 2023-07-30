import { z } from 'zod';

const contactSchema = z.object({
  id: z.number(),
  nome: z.string().min(1).max(45),
  email: z.string().email().max(45),
  telefone: z.string().max(15),
  dataRegistro: z.string(),
});

const contactRequestSchema = contactSchema.omit({
    id:true,
    dataRegistro: true
});

export {contactSchema, contactRequestSchema}