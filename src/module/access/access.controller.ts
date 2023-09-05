import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessDTO, AccessDTOPUT } from './acces.dto';

@Controller('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  // Access methods
  @Get(':language')
  async getLanguage(@Param('language') language: string) {
    return this.accessService.getAccess(language);
  }

  @Get()
  async getAllLanguages() {
    return this.accessService.getAllAccess();
  }

  @Post()
  async createAccess(@Body() data: AccessDTO) {
    return await this.accessService.createAccess(data);
  }

  @Put(':language')
  async updateAccess(
    @Param('language') language: string,
    @Body() data: AccessDTOPUT,
  ) {
    return await this.accessService.updateAccess(language, data);
  }
}
