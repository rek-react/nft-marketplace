import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSessionMiddleware } from './lib/session/session.middleware';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  await setupSessionMiddleware(app, config);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.enableCors({
    origin: config.getOrThrow('CLIENT_URL'),
    credentials: true,
  });

  await app.listen(config.getOrThrow('PORT') ?? 3001);
}
bootstrap();
