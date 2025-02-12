import { Test, TestingModule } from '@nestjs/testing';
import { NutritionalPlanService } from './nutritional_plan.service';

describe('NutritionalPlanService', () => {
  let service: NutritionalPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionalPlanService],
    }).compile();

    service = module.get<NutritionalPlanService>(NutritionalPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
