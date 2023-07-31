import { Request, Response, NextFunction } from "express";
import { Contact, Client } from "../entities";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";

const checkContactOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: contactId } = req.params;
  const clientId = res.locals.user.id;

  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({ where: { id: clientId } });

  if (!client) {
    throw new AppError("User not found", 404);
  }

  const parsedContactId = parseInt(contactId, 10);

  const contact = await contactRepository.findOne({
    where: { id: parsedContactId },
    relations: ["client"],
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact.client.id !== clientId) {
    throw new AppError(
      "You do not have permission to delete this contact",
      403
    );
  }

  next();
};

export default checkContactOwnerMiddleware;
