import { Repository } from "typeorm";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/client.interfaces";
import { clientResponseSchema } from "../../schemas/client.schema";
import { hash } from "bcryptjs";

const registerClientServices = async (
  userData: TClientRequest
): Promise<TClientResponse> => {
  const { email, name, password, telephone } = userData;
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const hashedPassword = await hash(password, 10);
  const user: Client = userRepository.create({
    name,
    email,
    password: hashedPassword,
    telephone
  });

  await userRepository.save(user);

  const returnUser: TClientResponse = clientResponseSchema.parse(user);

  return returnUser;
};

export default registerClientServices;
