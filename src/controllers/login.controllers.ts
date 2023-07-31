import { Request, Response } from "express";
import Tlogin from "../interfaces/login.interfaces";
import createSessionServices from "../services/login/createSession.services";

const createSessionControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: Tlogin = req.body;

  const token = await createSessionServices(loginData);

  return res.status(200).json({ token });
};

export { createSessionControllers };
