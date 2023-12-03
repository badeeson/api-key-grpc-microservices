import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { ApiKeyService } from './api-key.service';
import { IsKeyValid, Key, KeyByName, KeyGenerated, KeyRemainingQuota } from '@app/common';

@Controller()
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @GrpcMethod('ApiKeyService', 'GenerateApiKey')
  generateApiKey(data: KeyByName, metadata: Metadata, call: ServerUnaryCall<any, any>): KeyGenerated {
    const name = data?.name;
    const apiKey = this.apiKeyService.generateApiKey(name);
    return { key: apiKey.key, name: apiKey.name };
  }

  @GrpcMethod('ApiKeyService', 'ValidateApiKey')
  validateApiKey(data: Key, metadata: Metadata, call: ServerUnaryCall<any, any>): IsKeyValid {
    const key = data.key;
    const isValid = this.apiKeyService.validateApiKey(key);
    return { key, isValid };
  }

  @GrpcMethod('ApiKeyService', 'GetRemainingQuota')
  getRemainingQuota(data: Key, metadata: Metadata, call: ServerUnaryCall<any, any>): KeyRemainingQuota {
    const key = data.key;
    const remainingQuota = this.apiKeyService.getRemainingQuota(key);
    return { key, remainingQuota };
  }
}
