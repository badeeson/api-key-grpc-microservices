import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { API_KEY_PACKAGE_NAME } from '@app/common';
import { GRPC_CLIENT_SERVICE } from './constants';
import { ApiKeyService } from './api-key.service';
import { ApiKeyController } from './api-key.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: GRPC_CLIENT_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: API_KEY_PACKAGE_NAME,
          protoPath: join(__dirname, '../../../proto/api-key.proto'),
        },
      },
    ]),
  ],
  providers: [ApiKeyService],
  controllers: [ApiKeyController],
})
export class ApiKeyModule {}
