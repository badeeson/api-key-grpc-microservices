import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KeyByName } from '@app/common';
import { ApiKeyService } from './api-key.service';

@Controller('api-key')
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Post()
  generate(@Body() keyByName: KeyByName) {
    return this.apiKeyService.generate(keyByName);
  }

  @Get(':key')
  validate(@Param('key') key: string) {
    return this.apiKeyService.validate({ key });
  }
}
