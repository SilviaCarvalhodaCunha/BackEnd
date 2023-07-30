import { z } from 'zod';

const clientSchema = z.object({
  id: z.number(),
  nome: z.string().min(1).max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  telefone: z.string().max(15),
  dataRegistro: z.string(),
});

const clientRequestSchema = clientSchema.omit({
  id: true, 
  dataRegistro: true
});

const clientResponseSchema = clientSchema.omit({
  password:true
});


export { clientSchema, clientRequestSchema, clientResponseSchema };
