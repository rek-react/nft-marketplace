import { Injectable } from '@nestjs/common';

@Injectable()
export class DomainUtilService {
  extractDomain(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.host;
    } catch (error) {
      const match = url.match(/^(?:https?:\/\/)?([^\/:]+(?::\d+)?)/);
      return match ? match[1] : url;
    }
  }

  getHostname(url: string): string {
    const domain = this.extractDomain(url);
    return domain.split(':')[0];
  }

  getPort(url: string): string | null {
    const domain = this.extractDomain(url);
    const parts = domain.split(':');
    return parts.length > 1 ? parts[1] : null;
  }

  isLocalhost(url: string): boolean {
    const hostname = this.getHostname(url);
    return hostname === 'localhost' || hostname === '127.0.0.1';
  }
}
