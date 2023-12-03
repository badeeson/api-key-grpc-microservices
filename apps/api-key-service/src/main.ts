import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';
import { API_KEY_PACKAGE_NAME } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: API_KEY_PACKAGE_NAME,
      protoPath: join(__dirname, '../../../proto/api-key.proto'),
    },
  });
  await app.listen();
}
bootstrap();
