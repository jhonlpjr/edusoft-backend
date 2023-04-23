import { Inject, BadRequestException } from '@nestjs/common';
import { CreateContactDto } from 'src/contact/domain/dto/create-contact.dto';
import { ContactRepository } from 'src/contact/domain/repository/contact.repository';
import { REPOSITORY } from 'src/shared/enums/injectable.enum';

export class FindContactsUseCase {
  constructor(
    @Inject(REPOSITORY.CONTACT)
    private readonly contactRepository: ContactRepository,
  ) {}

  async handle() {
    try {
      const contacts = await this.contactRepository.findAll();
      return contacts;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
