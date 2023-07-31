import { Router } from "express";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import {
  clientRequestSchema,
  clientUpdateSchema,
} from "../schemas/client.schema";
import checkEmailExistsMiddlewares from "../middlewares/checkEmailExists.middlewares";
import {
  deleteClientControllers,
  listClientControllers,
  registerClientControllers,
  updateClientControllers,
} from "../controllers/client.controllers";
import checkTokenIsValidMiddlewares from "../middlewares/checkTokenIsValid.middlewares";
import checkUserHasPermissionMiddlewares from "../middlewares/checkUserHasPermission.middlewares";
import checkUserExistsMiddlewares from "../middlewares/checkUserExists.middlewares";

const clientRoutes = Router();

clientRoutes.post(
  "",
  checkIsBodyValidMiddlewares(clientRequestSchema),
  checkEmailExistsMiddlewares,
  registerClientControllers
);

clientRoutes.get(
  "", 
  checkTokenIsValidMiddlewares, 
  listClientControllers);

clientRoutes.patch(
  "/:id",
  checkIsBodyValidMiddlewares(clientUpdateSchema),
  checkTokenIsValidMiddlewares,
  checkUserHasPermissionMiddlewares,
  checkUserExistsMiddlewares,
  checkEmailExistsMiddlewares,
  updateClientControllers
);

clientRoutes.delete(
  "/:id",
  checkTokenIsValidMiddlewares,
  checkUserExistsMiddlewares,
  checkUserHasPermissionMiddlewares,
  deleteClientControllers
);

export default clientRoutes;
