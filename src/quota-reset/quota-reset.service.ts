import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ApiKeyService } from '../api-key/api-key.service';

@Injectable()
export class QuotaResetService {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async resetQuota() {
    const allApiKeys = this.apiKeyService.getAllApiKeys();

    allApiKeys.forEach((apiKey) => {
      apiKey.remainingQuota = apiKey.maxQuotaPerDay;
      this.apiKeyService.updateApiKey(apiKey);
    });
  }
}
