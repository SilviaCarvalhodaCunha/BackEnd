import { Repository } from "typeorm";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TClientResponse, TClientUpdateRequest } from "../../interfaces/client.interfaces";
import { clientResponseSchema } from "../../schemas/client.schema";

const updateClientServices = async (
  userData: TClientUpdateRequest,
  id: number
): Promise<TClientResponse> => {
  const userRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const findUsers: Client | null = await userRepository.findOneBy({ id: id });

  const user: Client = userRepository.create({
    ...findUsers,
    ...userData,
  });

  await userRepository.save(user);

  const updateUser = clientResponseSchema.parse(user);

  return updateUser;
};

export default updateClientServices;
