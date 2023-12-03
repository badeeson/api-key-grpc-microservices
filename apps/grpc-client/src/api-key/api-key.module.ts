import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { API_KEY_PACKAGE_NAME } from '@common/common';
import { API_KEY_SERVICE } from './constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: API_KEY_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: API_KEY_PACKAGE_NAME,
          protoPath: join(__dirname, '../../../../proto/api-key.proto'),
        },
      },
    ]),
  ],
})
export class ApiKeyModule {}
