import { z } from "zod";
import {
  clientRequestSchema,
  clientResponseSchema,
  clientSchema,
} from "../schemas/client.schema";
import { DeepPartial } from "typeorm";

type TClient = z.infer<typeof clientSchema>;

type TClientRequest = z.infer<typeof clientRequestSchema>;

type TClientResponse = z.infer<typeof clientResponseSchema>;

type TClientUpdateRequest = DeepPartial<TClientRequest>;

export { TClient, TClientRequest, TClientResponse, TClientUpdateRequest };
