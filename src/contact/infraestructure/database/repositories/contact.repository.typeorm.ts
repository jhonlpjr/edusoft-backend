import { CreateContactDto } from 'src/contact/domain/dto/create-contact.dto';
import { UpdateContactDto } from 'src/contact/domain/dto/update-contact.dto';
import { ContactEntity } from 'src/contact/domain/entities/contact.entity';
import { ContactRepository } from 'src/contact/domain/repository/contact.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ContactRepositoryTypeorm implements ContactRepository {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>,
  ) {}
  async create(dto: CreateContactDto): Promise<ContactEntity> {
   try {
    const contact = await this.contactRepository.save(dto);
    console.log('muestrame el conata:', contact)
    return contact;
   }catch(error) {
    console.log('muestrame el conata erroreado:', error)
   } 
    //return contact;
  }

  async findAll(): Promise<ContactEntity[]> {
    const contacts = await this.contactRepository.find();
    return contacts;
  }
  async findById(id: number): Promise<ContactEntity> {
    const contact = await this.contactRepository.findOne({ where: { id } });
    return contact;
  }

  async update(id: number, dto: UpdateContactDto): Promise<ContactEntity> {
    let contact = await this.findById(id);
    contact.names = dto.names ? dto.names : contact.names;
    contact.lastNames = dto.lastNames ? dto.lastNames : contact.lastNames;
    contact.email = dto.email ? dto.email : contact.email;
    contact.phoneNumber = dto.phoneNumber
      ? dto.phoneNumber
      : contact.phoneNumber;
    contact = await this.contactRepository.save(contact);
    return contact;
  }
  async delete(id: number) {
    const contact = await this.contactRepository.delete(id);
    return contact;
  }
}
