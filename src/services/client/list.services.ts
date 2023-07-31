import { Repository } from "typeorm";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TClientResponse } from "../../interfaces/client.interfaces";
import { clientResponseSchema } from "../../schemas/client.schema";

const listClientServices = async (Id: number): Promise<TClientResponse> => {
  const userRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const findUsers = await userRepository.findOne({where: {id: Id}});

  const users = clientResponseSchema.parse(findUsers);

  return users;
};

export default listClientServices;
