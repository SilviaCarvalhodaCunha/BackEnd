import { Router } from "express";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import {
  contactRequestSchema,
  contactUpdateSchema,
} from "../schemas/contact.schema";
import checkTokenIsValidMiddlewares from "../middlewares/checkTokenIsValid.middlewares";
import checkUserExistsMiddlewares from "../middlewares/checkUserExists.middlewares";
import {
  deleteContactControllers,
  listClientContactsControllers,
  registerContactControllers,
  updateContactControllers,
} from "../controllers/contact.controllers";
import checkContactOwnerMiddleware from "../middlewares/checkContactOwner.middlewares";
import checkContactNameMiddleware from "../middlewares/checkContactName.middlewares";

const contactRoutes = Router();

contactRoutes.post(
  "",
  checkIsBodyValidMiddlewares(contactRequestSchema),
  checkTokenIsValidMiddlewares,
  checkUserExistsMiddlewares,
  checkContactNameMiddleware,
  registerContactControllers
);

contactRoutes.get(
  "",
  checkTokenIsValidMiddlewares,
  listClientContactsControllers
);

contactRoutes.patch(
  "/:id",
  checkIsBodyValidMiddlewares(contactUpdateSchema),
  checkTokenIsValidMiddlewares,
  checkContactOwnerMiddleware,
  checkContactNameMiddleware,
  updateContactControllers
);

contactRoutes.delete(
  "/:id",
  checkTokenIsValidMiddlewares,
  checkContactOwnerMiddleware,
  deleteContactControllers
);

export default contactRoutes;
