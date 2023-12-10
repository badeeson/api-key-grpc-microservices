import { NestFactory } from '@nestjs/core';
import { GrpcClientModule } from './grpc-client.module';

async function bootstrap() {
  const app = await NestFactory.create(GrpcClientModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
  });
  await app.listen(4000);
}
bootstrap();
