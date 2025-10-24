import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { ConfigService } from '@nestjs/config';

describe('EnvConfigService', () => {
  let sut: EnvConfigService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnvConfigService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockImplementation((key: string) => {
              if (key === 'PORT') return '3000';
              return null;
            }),
          },
        },
      ],
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return the variable PORT value', () => {
    expect(sut.getAppPort()).toBe(3000);
  });
});
