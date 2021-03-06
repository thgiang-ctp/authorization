import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FlowModule } from './flow/flow.module';
import mysql_authorization from './config/mysql_authorization';

@Module({
  imports: [ConfigModule.forRoot({ load: [mysql_authorization] }), FlowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
