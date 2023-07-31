import { Repository } from "typeorm"
import { Contact } from "../../entities"
import { AppDataSource } from "../../data-source"

const deleteContactServices = async (id: number): Promise<void> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOneBy({id: id})

    await contactRepository.remove(findContact!)
}

export default deleteContactServices