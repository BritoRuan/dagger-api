import { Module } from "@nestjs/common";
import { EnvConfigModule } from "./infra/env-config/env-config.module";

@Module({
  imports: [EnvConfigModule.forRoot()],
})
export class CommonModule { }