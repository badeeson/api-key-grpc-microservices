import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyController } from './api-key/api-key.controller';
import { ApiKeyModule } from './api-key/api-key.module';

@Module({
  imports: [ApiKeyModule],
  controllers: [AppController, ApiKeyController],
  providers: [AppService],
})
export class AppModule {}
