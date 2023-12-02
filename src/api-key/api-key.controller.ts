import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';
import { GenerateByName } from './interfaces/generate-by-name.interface';
import { Key } from './interfaces/key.interface';
import { ApiKeyService } from './api-key.service';

@Controller()
export class ApiKeyController {
  private readonly keyLists = [];

  @GrpcMethod('ApiKeyService', 'Generate')
  generate(data: GenerateByName, metadata: Metadata, call: ServerUnaryCall<any, any>): Key {
    const name: string = data?.name;
    const key: string = uuidv4();
    const list = { name, key };
    this.keyLists.push(list);
    return { key };
  }

  @GrpcMethod('ApiKeyService', 'Validate')
  validate(data: Key, metadata: Metadata, call: ServerUnaryCall<any, any>): Key {
    const name: string = data?.name;
    const key: string = uuidv4();
    const list = { name, key };
    this.keyLists.push(list);
    return { key };
  }
}
