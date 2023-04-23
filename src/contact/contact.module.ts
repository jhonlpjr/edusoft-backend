import { Module } from '@nestjs/common';
import { ContactService } from './application/contact.service';
import { ContactController } from './infraestructure/controllers/contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactEntity } from './domain/entities/contact.entity';
import { contactApplicationProviders } from './application/providers/contact.application.providers';
import { contactInfraestructureProviders } from './infraestructure/providers/contact.infraestructure.providers';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  controllers: [ContactController],
  providers: [
    ContactService,
    ...contactApplicationProviders,
    ...contactInfraestructureProviders,
  ],
})
export class ContactModule {}
