import { Request, Response, NextFunction } from "express";
import { Contact } from "../entities";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";

const checkContactNameMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  const clientId = res.locals.user.id;

  if (name) {
    const contactRepository = AppDataSource.getRepository(Contact);
    const existingContact = await contactRepository.findOne({
      where: { client: { id: clientId }, name: name },
    });

    if (existingContact) {
      throw new AppError(
        "Já existe um contato com o mesmo nome para este usuário.",
        409
      );
    }
  }

  next();
};

export default checkContactNameMiddleware;
