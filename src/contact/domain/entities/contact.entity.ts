import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contact')
export class ContactEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    names: string;
    @Column({nullable: true})
    lastNames: string;
    @Column()
    dni: string;
    @Column()
    code: string;
    @Column()
    phoneNumber: string;
    @Column()
    phoneNumber2: string;
    @Column()
    email: string;
    @Column()
    email2: string;
    @Column()
    school: string;
    @Column()
    network: string;
    @Column()
    address: string;
    @Column()
    status: string;
    @Column()
    validation: string;
    @Column()
    scope: string;
}
