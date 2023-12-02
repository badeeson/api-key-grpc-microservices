import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyController } from './api-key/api-key.controller';
import { ApiKeyService } from './api-key/api-key.service';

@Module({
  controllers: [AppController, ApiKeyController],
  providers: [AppService, ApiKeyService],
})
export class AppModule {}
