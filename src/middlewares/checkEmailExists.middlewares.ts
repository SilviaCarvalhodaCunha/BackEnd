import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Client } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkEmailExistsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const { email } = req.body;

  if (email) {
    const findEmail = await userRepository.findOne({ where: { email: email } });

    if (findEmail) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};

export default checkEmailExistsMiddlewares;
