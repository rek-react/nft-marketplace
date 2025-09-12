"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const is_authenticated_decorator_1 = require("./decorators/is-authenticated.decorator");
const connect_wallet_dto_1 = require("../wallet/dto/connect-wallet.dto");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async nonce(req) {
        const nonce = this.authService.getNonce();
        req.session.nonce = nonce;
        return { nonce };
    }
    async connectWallet(dto, req) {
        const nonce = req.session.nonce;
        const { user, wallet } = await this.authService.connectWallet(dto, nonce);
        const loginError = await new Promise((resolve) => req.logIn(user, (error) => resolve(error)));
        if (loginError) {
            throw new common_1.InternalServerErrorException('Could not login user');
        }
        delete req.session.nonce;
        return { user, wallet };
    }
    async logout(req) {
        const logoutError = await new Promise((resolve) => req.logOut({}, (error) => resolve(error)));
        if (logoutError) {
            throw new common_1.InternalServerErrorException('Could not log out user');
        }
        return true;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('nonce'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "nonce", null);
__decorate([
    (0, common_1.Post)('connect-wallet'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [connect_wallet_dto_1.ConnectWalletDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "connectWallet", null);
__decorate([
    (0, is_authenticated_decorator_1.IsAuthenticated)(),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map