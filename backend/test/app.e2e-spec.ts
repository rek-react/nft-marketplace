import { Test, TestingModule } from '@nestjs/testing';
import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from 'src/app.module';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { setupSessionMiddleware } from 'src/lib/session/session.middleware';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    const config = app.get(ConfigService);

    await setupSessionMiddleware(app, config);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(
      new ClassSerializerInterceptor(app.get(Reflector)),
    );

    await app.init();
  });

  it('/auth/nonce (POST) should return a nonce', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/nonce')
      .send()
      .expect(201);

    expect(res.body).toHaveProperty('nonce');
  });

  it('/auth/connect-wallet (POST) without nonce should fail', async () => {
    return request(app.getHttpServer())
      .post('/auth/connect-wallet')
      .send({ message: 'fake', signature: 'fake' })
      .expect(401);
  });
});
