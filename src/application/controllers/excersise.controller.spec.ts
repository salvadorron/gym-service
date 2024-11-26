import { Test, TestingModule } from '@nestjs/testing';
import { ExcersiseController } from './excersise.controller';

describe('ExcersiseController', () => {
  let controller: ExcersiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcersiseController],
    }).compile();

    controller = module.get<ExcersiseController>(ExcersiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
