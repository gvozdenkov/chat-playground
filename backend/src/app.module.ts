import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, GatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
