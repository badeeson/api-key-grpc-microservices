import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyController } from './api-key/api-key.controller';
import { ApiKeyService } from './api-key/api-key.service';
import { QuotaResetService } from './quota-reset/quota-reset.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [AppController, ApiKeyController],
  providers: [AppService, ApiKeyService, QuotaResetService],
})
export class AppModule {}
