import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infra/env-config/env-config.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule, EnvConfigModule, UsersModule],
})
export class AppModule {}
