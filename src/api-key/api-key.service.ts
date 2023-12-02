// api-key.service.ts

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ApiKey } from './interfaces/api-key.interface';

@Injectable()
export class ApiKeyService {
  private readonly apiKeys: Map<string, ApiKey> = new Map<string, ApiKey>();

  generateApiKey(): ApiKey {
    const maxQuotaPerDay = 200000;
    const apiKey: ApiKey = {
      key: uuidv4(),
      remainingQuota: maxQuotaPerDay,
      maxQuotaPerDay,
      createdAt: new Date(),
    };

    this.apiKeys.set(apiKey.key, apiKey);
    return apiKey;
  }

  validateApiKey(key: string): boolean {
    return this.apiKeys.has(key);
  }

  getRemainingQuota(key: string): number {
    const apiKey = this.apiKeys.get(key);
    return apiKey ? apiKey.remainingQuota : 0;
  }

  decrementQuota(key: string): void {
    const apiKey = this.apiKeys.get(key);
    if (apiKey) {
      apiKey.remainingQuota -= 1;
      this.apiKeys.set(key, apiKey);
    }
  }
}
