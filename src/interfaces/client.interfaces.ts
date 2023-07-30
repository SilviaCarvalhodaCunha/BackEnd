import { z } from "zod";
import { clientRequestSchema, clientResponseSchema, clientSchema } from "../schemas/client.schema";

type TClient = z.infer<typeof clientSchema>

type TClientRequest = z.infer<typeof clientRequestSchema>

type TClientResponse = z.infer<typeof clientResponseSchema>

export {TClient, TClientRequest, TClientResponse}