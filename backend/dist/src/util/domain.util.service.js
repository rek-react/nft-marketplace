"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUtilService = void 0;
const common_1 = require("@nestjs/common");
let DomainUtilService = class DomainUtilService {
    extractDomain(url) {
        try {
            const urlObj = new URL(url);
            return urlObj.host;
        }
        catch (error) {
            const match = url.match(/^(?:https?:\/\/)?([^\/:]+(?::\d+)?)/);
            return match ? match[1] : url;
        }
    }
    getHostname(url) {
        const domain = this.extractDomain(url);
        return domain.split(':')[0];
    }
    getPort(url) {
        const domain = this.extractDomain(url);
        const parts = domain.split(':');
        return parts.length > 1 ? parts[1] : null;
    }
    isLocalhost(url) {
        const hostname = this.getHostname(url);
        return hostname === 'localhost' || hostname === '127.0.0.1';
    }
};
exports.DomainUtilService = DomainUtilService;
exports.DomainUtilService = DomainUtilService = __decorate([
    (0, common_1.Injectable)()
], DomainUtilService);
//# sourceMappingURL=domain.util.service.js.map