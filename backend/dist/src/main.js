"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const session_middleware_1 = require("./lib/session/session.middleware");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    await (0, session_middleware_1.setupSessionMiddleware)(app, config);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.enableCors({
        origin: config.getOrThrow('CLIENT_URL'),
        credentials: true,
    });
    await app.listen(config.getOrThrow('PORT') ?? 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map