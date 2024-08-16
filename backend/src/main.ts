import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  app.enableVersioning({
    type: VersioningType.URI,
  });


  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');

  await app.listen(PORT, () =>
    console.log(`\nServer running on port ${PORT}, http://localhost:${PORT}\n`),
  );
}

bootstrap();
