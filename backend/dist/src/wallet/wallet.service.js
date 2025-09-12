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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const wallet_entity_1 = require("./entities/wallet.entity");
let WalletService = class WalletService {
    walletRepository;
    userService;
    constructor(walletRepository, userService) {
        this.walletRepository = walletRepository;
        this.userService = userService;
    }
    async connect(address, chainId) {
        const existingWallet = await this.walletRepository.findOne({
            where: { address },
        });
        if (existingWallet)
            return existingWallet;
        const user = await this.userService.create();
        const wallet = this.walletRepository.create({
            address,
            chainId,
            userId: user.id,
        });
        return this.walletRepository.save(wallet);
    }
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wallet_entity_1.WalletEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], WalletService);
//# sourceMappingURL=wallet.service.js.map