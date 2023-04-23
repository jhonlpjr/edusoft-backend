import { CreateContactUseCase } from '../use-cases/create-contact.usecase';
import { DeleteContactUseCase } from '../use-cases/delete-contact.usecase';
import { FindContactsUseCase } from '../use-cases/find-contacts.usecase';
import { FindOneContactUseCase } from '../use-cases/find-one-contact.usecase';
import { UpdateContactUseCase } from '../use-cases/update-contact.usecase';

export const contactApplicationProviders = [
  CreateContactUseCase,
  FindContactsUseCase,
  FindOneContactUseCase,
  UpdateContactUseCase,
  DeleteContactUseCase,
];
