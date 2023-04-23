import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateContactDto {
    @ApiProperty()
    @IsString()
    names: string;
    @ApiProperty()
    @IsString()
    lastNames: string;
    @ApiProperty()
    @IsEmail()
    @IsOptional()
    email: string;
    @ApiProperty()
    @IsPhoneNumber()
    phoneNumber: string;
}
