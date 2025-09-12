"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSessionMiddleware = setupSessionMiddleware;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const ms = require("ms");
const redis_client_1 = require("../redis/redis.client");
const connect_redis_1 = require("connect-redis");
async function setupSessionMiddleware(app, config) {
    const secret = config.getOrThrow('SESSION_SECRET_KEY');
    const maxAge = ms(config.getOrThrow('SESSION_EXPIRES_IN'));
    const redisClient = await (0, redis_client_1.createRedisClient)(config);
    const redisStore = new connect_redis_1.default({
        client: redisClient,
        ttl: Math.floor(maxAge / 1000),
    });
    app.use(cookieParser());
    app.use(session({
        secret,
        store: redisStore,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: config.getOrThrow('NODE_ENV') === 'development' ? false : true,
            maxAge,
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}
//# sourceMappingURL=session.middleware.js.map