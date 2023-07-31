import { Repository } from "typeorm";
import { Client } from "../../entities";
import { AppDataSource } from "../../data-source";

const deleteClientServices = async (id: number): Promise<void> => {
  const userRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const findUser = await userRepository.findOneBy({ id: id });

  await userRepository.remove(findUser!);
};

export default deleteClientServices;
