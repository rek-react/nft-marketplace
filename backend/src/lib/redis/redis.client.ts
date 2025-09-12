import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';

export async function createRedisClient(config: ConfigService) {
  const client = createClient({
    socket: {
      host: config.getOrThrow('REDIS_HOST'),
      port: Number(config.getOrThrow('REDIS_PORT')),
    },
  });

  client.on('error', (err) => console.error('Redis Client Error', err));

  await client.connect();

  return client;
}
