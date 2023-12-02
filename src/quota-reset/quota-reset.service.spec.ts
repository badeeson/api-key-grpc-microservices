import { Test, TestingModule } from '@nestjs/testing';
import { QuotaResetService } from './quota-reset.service';

describe('QuotaResetService', () => {
  let service: QuotaResetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotaResetService],
    }).compile();

    service = module.get<QuotaResetService>(QuotaResetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
