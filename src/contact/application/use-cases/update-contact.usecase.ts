import { Inject, BadRequestException } from '@nestjs/common';
import { CreateContactDto } from 'src/contact/domain/dto/create-contact.dto';
import { UpdateContactDto } from 'src/contact/domain/dto/update-contact.dto';
import { ContactRepository } from 'src/contact/domain/repository/contact.repository';
import { REPOSITORY } from 'src/shared/enums/injectable.enum';

export class UpdateContactUseCase {
  constructor(
    @Inject(REPOSITORY.CONTACT)
    private readonly contactRepository: ContactRepository,
  ) {}

  async handle(id: number, dto: UpdateContactDto) {
    try {
      const contact = await this.contactRepository.update(id, dto);
      return contact;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
