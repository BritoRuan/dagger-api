import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infra/env-config/env-config.module';

@Module({
  imports: [ConfigModule, EnvConfigModule],
})
export class AppModule {}
