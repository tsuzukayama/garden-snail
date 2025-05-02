import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ArtifactsModule } from "./artifacts/artifacts.module";
import { validate } from "./config/configuration";
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    ArtifactsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate,
    }),
    HealthcheckModule,
  ],
})
export class AppModule {}
