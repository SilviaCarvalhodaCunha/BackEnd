import { Repository } from "typeorm";
import { Client, Contact } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TContact, TContactRequest } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contact.schema";

const registerContactServices = async (
  clientId: number, 
  contactData: TContactRequest
): Promise<TContact> => {
  const {name, email, telephone} = contactData
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({ where: { id: clientId } });

  if (!client) {
    throw new Error("Client not found");
  }

  const contact: Contact = contactRepository.create({name, email, telephone, client});

  await contactRepository.save(contact);

  const returnContact: TContact = contactSchema.parse(contact);

  return returnContact;
};

export default registerContactServices;
