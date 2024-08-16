import { Module } from '@nestjs/common';
import { GatewayModule } from './gateway/gateway.module';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './db/database.module';
import { UsersModule } from '#users/users.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, UsersModule, GatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
