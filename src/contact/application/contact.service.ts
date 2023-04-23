import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../domain/dto/create-contact.dto';
import { UpdateContactDto } from '../domain/dto/update-contact.dto';
import { CreateContactUseCase } from './use-cases/create-contact.usecase';
import { FindContactsUseCase } from './use-cases/find-contacts.usecase';
import { FindOneContactUseCase } from './use-cases/find-one-contact.usecase';
import { UpdateContactUseCase } from './use-cases/update-contact.usecase';
import { DeleteContactUseCase } from './use-cases/delete-contact.usecase';

@Injectable()
export class ContactService {
  constructor(private createContactUseCase: CreateContactUseCase,
    private findContactsUseCase: FindContactsUseCase,
    private findOneContactUseCase: FindOneContactUseCase,
    private updateContactUseCase: UpdateContactUseCase,
    private deleteContactUseCase: DeleteContactUseCase) {}
    
  async create(createContactDto: CreateContactDto) {
    return await this.createContactUseCase.handle(createContactDto);
  }

  async findAll() {
    return await this.findContactsUseCase.handle();
  }

  async findOne(id: number) {
    return await this.findOneContactUseCase.handle(id);
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    return await this.updateContactUseCase.handle(id, updateContactDto);
  }

  async remove(id: number) {
    return await this.deleteContactUseCase.handle(id);
  }
}
