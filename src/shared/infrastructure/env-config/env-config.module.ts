import { Module } from '@nestjs/common';
import { EnvConfigService } from './application/services/env-config.service';

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule {}
