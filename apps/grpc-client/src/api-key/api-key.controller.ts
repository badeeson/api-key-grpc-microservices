import { Body, Controller, Post } from '@nestjs/common';
import { KeyByName } from '@app/common';
import { ApiKeyService } from './api-key.service';

@Controller('api-key')
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Post()
  generate(@Body() keyByName: KeyByName) {
    console.log('generate key', keyByName)
    return this.apiKeyService.generate(keyByName);
  }
}
