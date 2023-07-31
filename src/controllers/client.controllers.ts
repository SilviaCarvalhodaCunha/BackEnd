import { Request, Response } from "express";
import { TClientRequest, TClientResponse, TClientUpdateRequest } from "../interfaces/client.interfaces";
import registerClientServices from "../services/client/register.services";
import updateClientServices from "../services/client/update.services";
import deleteClientServices from "../services/client/delete.services";
import listClientServices from "../services/client/list.services";

const registerClientControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TClientRequest = req.body;
  const newUser: TClientResponse = await registerClientServices(userData);
  return res.status(201).json(newUser);
};

const listClientControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Id = res.locals.user.id;
  const listUsers: TClientResponse = await listClientServices(Id);
  return res.status(200).json(listUsers);
};

const updateClientControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TClientUpdateRequest = req.body;
  const id: number = parseInt(req.params.id);
  const updateData: TClientResponse = await updateClientServices(userData, id);
  return res.status(200).json(updateData);
};

const deleteClientControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  await deleteClientServices(id);

  return res.status(204).send();
};

export {
  registerClientControllers,
  listClientControllers,
  updateClientControllers,
  deleteClientControllers
};
