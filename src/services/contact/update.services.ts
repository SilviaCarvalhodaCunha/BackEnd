import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import {
  TContact,
  TContactUpdateRequest,
} from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contact.schema";

const updateContactServices = async (
  contactData: TContactUpdateRequest,
  id: number
): Promise<TContact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact: Contact | null = await contactRepository.findOneBy({
    id: id,
  });

  const contact: Contact = contactRepository.create({
    ...findContact,
    ...contactData,
  });

  await contactRepository.save(contact)

  const updateContact = contactSchema.parse(contact)

  return updateContact
};

export default updateContactServices;
