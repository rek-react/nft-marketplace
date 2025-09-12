import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as ms from 'ms';
import { createRedisClient } from '../redis/redis.client';
import RedisStore from 'connect-redis';

export async function setupSessionMiddleware(
  app: INestApplication,
  config: ConfigService,
) {
  const secret = config.getOrThrow('SESSION_SECRET_KEY');
  const maxAge = ms(config.getOrThrow<ms.StringValue>('SESSION_EXPIRES_IN'));

  const redisClient = await createRedisClient(config);

  const redisStore = new RedisStore({
    client: redisClient,
    ttl: Math.floor(maxAge / 1000), // seconds
  });

  app.use(cookieParser());

  app.use(
    session({
      secret,
      store: redisStore,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false, // if https to true
        maxAge,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
}
