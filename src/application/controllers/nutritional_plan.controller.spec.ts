import { Test, TestingModule } from '@nestjs/testing';
import { NutritionalPlanController } from './nutritional_plan.controller';
import { NutritionalPlanService } from '../services/nutritional_plan/nutritional_plan.service';

describe('NutritionalPlanController', () => {
  let controller: NutritionalPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutritionalPlanController],
      providers: [NutritionalPlanService],
    }).compile();

    controller = module.get<NutritionalPlanController>(NutritionalPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
