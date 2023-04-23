import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactService } from '../../application/contact.service';
import { CreateContactDto } from '../../domain/dto/create-contact.dto';
import { UpdateContactDto } from '../../domain/dto/update-contact.dto';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('contact')
@ApiTags('Contactos')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({description: 'Endpoint para crear Contactos.'})
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  @ApiOperation({description: 'Endpoint para listar Contactos.'})
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  @ApiOperation({description: 'Endpoint para obtener un Contacto por ID.'})
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({description: 'Endpoint para actualizar Contactos.'})
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(+id, updateContactDto);
  }

  @Delete(':id')
  @ApiOperation({description: 'Endpoint para eliminar Contactos.'})
  remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }
}
