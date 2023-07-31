import { Repository } from "typeorm";
import { Client, Contact } from "../../entities";
import { AppDataSource } from "../../data-source";


const listClientContactsServices = async (clientId: number): Promise<Contact[]> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOne({ where: { id: clientId } });

  if (!client) {
    return [];
  }

  const contacts = await contactRepository.find({where:{client:client}})

  return contacts
};

export default listClientContactsServices;
