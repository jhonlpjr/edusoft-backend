import { Inject, BadRequestException } from '@nestjs/common';
import { CreateContactDto } from 'src/contact/domain/dto/create-contact.dto';
import { ContactRepository } from 'src/contact/domain/repository/contact.repository';
import { REPOSITORY } from 'src/shared/enums/injectable.enum';

export class DeleteContactUseCase {
  constructor(
    @Inject(REPOSITORY.CONTACT)
    private readonly contactRepository: ContactRepository,
  ) {}

  async handle(id: number) {
    try {
      const contact = await this.contactRepository.delete(id);
      return contact;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
