"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedisClient = createRedisClient;
const redis_1 = require("redis");
async function createRedisClient(config) {
    const client = (0, redis_1.createClient)({
        socket: {
            host: config.getOrThrow('REDIS_HOST'),
            port: Number(config.getOrThrow('REDIS_PORT')),
        },
    });
    client.on('error', (err) => console.error('Redis Client Error', err));
    await client.connect();
    return client;
}
//# sourceMappingURL=redis.client.js.map