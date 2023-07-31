import { z } from "zod";
import { contactRequestSchema, contactSchema } from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type TContact = z.infer<typeof contactSchema>;

type TContactRequest = z.infer<typeof contactRequestSchema>;

type TContactUpdateRequest = DeepPartial<TContactRequest>;

export { TContact, TContactRequest, TContactUpdateRequest };
