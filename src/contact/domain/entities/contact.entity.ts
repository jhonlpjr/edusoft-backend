import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contact')
export class ContactEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    names: string;
    @Column()
    lastNames: string;
    @Column()
    email: string;
    @Column()
    phoneNumber: string;
}
