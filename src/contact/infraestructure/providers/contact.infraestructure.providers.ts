import { REPOSITORY } from 'src/shared/enums/injectable.enum';
import { ContactRepositoryTypeorm } from '../database/repositories/contact.repository.typeorm';

export const contactInfraestructureProviders = [
  { provide: REPOSITORY.CONTACT, useClass: ContactRepositoryTypeorm },
];
