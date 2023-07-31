import { Repository } from "typeorm";
import Tlogin from "../../interfaces/login.interfaces";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const createSessionServices = async (loginData: Tlogin): Promise<string> => {
  const userRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const user: Client | null = await userRepository.findOne({
    where: { email: loginData.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePassword: boolean = await compare(
    loginData.password,
    user.password
  );

  console.log(comparePassword)

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      userName: user.name,
    },
      process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: String(user.id),
    }
  );

  return token;
};

export default createSessionServices;
