import { Module } from '@nestjs/common';
import { GrpcClientController } from './grpc-client.controller';
import { GrpcClientService } from './grpc-client.service';
import { ApiKeyModule } from './api-key/api-key.module';

@Module({
  imports: [ApiKeyModule],
  controllers: [GrpcClientController],
  providers: [GrpcClientService],
})
export class GrpcClientModule {}
