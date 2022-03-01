import { Test, TestingModule } from '@nestjs/testing';
import { MongoCommunicatorService } from './mongo-communicator.service';

describe('MongoCommunicatorService', () => {
  let service: MongoCommunicatorService<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoCommunicatorService],
    }).compile();

    service = module.get<MongoCommunicatorService<any>>(MongoCommunicatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
