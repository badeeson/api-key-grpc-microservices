import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
// import { v4 as uuidv4 } from 'uuid';
import { KeyByName } from './interfaces/key-by-name.interface';
import { KeyGenerated } from './interfaces/key-generated.interface';
import { ApiKeyService } from './api-key.service';

@Controller()
export class ApiKeyController {
  constructor(private readonly apiKeyService: ApiKeyService) {}
  // private readonly keyLists = [];

  @GrpcMethod('ApiKeyService', 'GenerateApiKey')
  generateApiKey(data: KeyByName, metadata: Metadata, call: ServerUnaryCall<any, any>): KeyGenerated {
    const name = data?.name;
    const apiKey = this.apiKeyService.generateApiKey(name);
    return { key: apiKey.key };
  }

  // @GrpcMethod('ApiKeyService', 'GenerateApiKey')
  // generateApiKey(data: KeyByName, metadata: Metadata, call: ServerUnaryCall<any, any>): KeyGenerated {
  //   const name = data?.name;
  //   const apiKey = this.apiKeyService.generateApiKey(name);
  //   return { key: apiKey.key };
  // }
  // @GrpcMethod('ApiKeyService', 'Validate')
  // validate(data: Key, metadata: Metadata, call: ServerUnaryCall<any, any>): Key {
  //   const name: string = data?.name;
  //   const key: string = uuidv4();
  //   const list = { name, key };
  //   this.keyLists.push(list);
  //   return { key };
  // }
}
