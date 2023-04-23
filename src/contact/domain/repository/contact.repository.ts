import { CreateContactDto } from "../dto/create-contact.dto";
import { UpdateContactDto } from "../dto/update-contact.dto";
import { ContactEntity } from "../entities/contact.entity";

export interface ContactRepository {
    create(dto: CreateContactDto): Promise<ContactEntity>;
    findAll(): Promise<ContactEntity[]>;
    findById(id: number): Promise<ContactEntity>;
    update(id: number, dto: UpdateContactDto): Promise<ContactEntity>;
    delete(id: number);
}