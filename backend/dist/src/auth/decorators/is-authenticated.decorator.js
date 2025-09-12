"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAuthenticated = void 0;
const common_1 = require("@nestjs/common");
const is_authenticated_guard_1 = require("../guards/is-authenticated.guard");
const IsAuthenticated = () => (0, common_1.applyDecorators)((0, common_1.UseGuards)(is_authenticated_guard_1.IsAuthenticatedGuard));
exports.IsAuthenticated = IsAuthenticated;
//# sourceMappingURL=is-authenticated.decorator.js.map