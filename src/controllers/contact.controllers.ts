import { Request, Response } from "express";
import {
  TContact,
  TContactRequest,
  TContactUpdateRequest,
} from "../interfaces/contact.interfaces";
import registerContactServices from "../services/contact/register.services";
import listClientContactsServices from "../services/contact/list.services";
import deleteContactServices from "../services/contact/delete.services";
import updateContactServices from "../services/contact/update.services";

const registerContactControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId: number = res.locals.user.id;
  const contactData: TContactRequest = req.body;
  const newContact = await registerContactServices(clientId, contactData);
  return res.status(201).json(newContact);
};

const listClientContactsControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientId: number = res.locals.user.id;
  const contacts = await listClientContactsServices(clientId);
  return res.status(200).json(contacts);
};

const updateContactControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TContactUpdateRequest = req.body;
  const id: number = parseInt(req.params.id);
  const updateData: TContact = await updateContactServices(contactData, id);
  return res.status(200).json(updateData);
};

const deleteContactControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);

  await deleteContactServices(id);

  return res.status(204).send();
};

export {
  registerContactControllers,
  listClientContactsControllers,
  updateContactControllers,
  deleteContactControllers,
};
