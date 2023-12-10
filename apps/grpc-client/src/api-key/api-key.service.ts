import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { API_KEY_SERVICE_NAME, ApiKeyServiceClient, Key, KeyByName } from '@app/common';
import { GRPC_CLIENT_SERVICE } from './constants';

@Injectable()
export class ApiKeyService implements OnModuleInit {
  private apiKeyService: ApiKeyServiceClient;

  constructor(@Inject(GRPC_CLIENT_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.apiKeyService = this.client.getService<ApiKeyServiceClient>(API_KEY_SERVICE_NAME);
  }

  generate(keyByName: KeyByName) {
    return this.apiKeyService.generateApiKey(keyByName);
  }

  validate(key: string) {
    return this.apiKeyService.validateApiKey({ key });
  }

  remainingQuota(key: string) {
    return this.apiKeyService.getRemainingQuota({ key });
  }

  getAllApiKeys() {
    return this.apiKeyService.getAllApiKeys({});
  }

  getApiKeyDetails(key: string) {
    return this.apiKeyService.getApiKeyDetails({ key });
  }
}
