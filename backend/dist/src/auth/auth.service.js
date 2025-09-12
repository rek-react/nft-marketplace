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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ethers_1 = require("ethers");
const siwe_1 = require("siwe");
const user_service_1 = require("../user/user.service");
const domain_util_service_1 = require("../util/domain.util.service");
const wallet_service_1 = require("../wallet/wallet.service");
let AuthService = class AuthService {
    walletService;
    userService;
    configService;
    domainUtilService;
    constructor(walletService, userService, configService, domainUtilService) {
        this.walletService = walletService;
        this.userService = userService;
        this.configService = configService;
        this.domainUtilService = domainUtilService;
    }
    getNonce() {
        return (0, siwe_1.generateNonce)();
    }
    async connectWallet(dto, expectedNonce) {
        if (!expectedNonce)
            throw new common_1.UnauthorizedException('Missing session nonce');
        const siwe = new siwe_1.SiweMessage(dto.message);
        const domain = this.domainUtilService.extractDomain(this.configService.getOrThrow('CLIENT_URL'));
        if (siwe.domain !== domain)
            throw new common_1.UnauthorizedException('Domain mismatch');
        if (siwe.nonce !== expectedNonce)
            throw new common_1.UnauthorizedException('Bad nonce');
        const now = new Date();
        if (siwe.notBefore && now < new Date(siwe.notBefore))
            throw new common_1.UnauthorizedException('Too early');
        if (siwe.expirationTime && now > new Date(siwe.expirationTime))
            throw new common_1.UnauthorizedException('Expired');
        const ok = (0, ethers_1.verifyMessage)(dto.message, dto.signature);
        if (!ok)
            throw new common_1.UnauthorizedException('Invalid signature (EOA)');
        const wallet = await this.walletService.connect(siwe.address, siwe.chainId);
        const user = await this.userService.findOne({
            where: {
                id: wallet.userId,
            },
        });
        if (!user)
            throw new common_1.UnauthorizedException('User not found for connected wallet');
        return {
            user,
            wallet,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wallet_service_1.WalletService,
        user_service_1.UserService,
        config_1.ConfigService,
        domain_util_service_1.DomainUtilService])
], AuthService);
//# sourceMappingURL=auth.service.js.map