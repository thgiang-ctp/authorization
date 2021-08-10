import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('apps/authorization/public'));
  app.setBaseViewsDir(resolve('apps/authorization/views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
