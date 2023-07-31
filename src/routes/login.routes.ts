import { Router } from "express";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middlewares";
import { createSessionControllers } from "../controllers/login.controllers";
import loginSchema from "../schemas/login.schema";

const loginRoutes = Router();

loginRoutes.post(
  "",
  checkIsBodyValidMiddlewares(loginSchema),
  createSessionControllers
);

export default loginRoutes;
