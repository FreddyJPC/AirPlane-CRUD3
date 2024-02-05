import { Test, TestingModule } from '@nestjs/testing';
import { AirplanesController } from './airplanes.controller';
import { AirplanesService } from './airplanes.service';

describe('AirplanesController', () => {
  let controller: AirplanesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirplanesController],
      providers: [AirplanesService],
    }).compile();

    controller = module.get<AirplanesController>(AirplanesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
