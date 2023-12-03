import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { KeyByName } from '@app/common';
import { ApiKeyService } from './api-key.service';

@Controller('api-key')
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Post()
  generate(@Body() keyByName: KeyByName) {
    return this.apiKeyService.generate(keyByName);
  }

  @Get()
  validate(@Query('key') key: string) {
    return this.apiKeyService.validate(key);
  }

  @Get('remaining/:key')
  remainingQuota(@Param('key') key: string) {
    return this.apiKeyService.remainingQuota(key);
  }
}
