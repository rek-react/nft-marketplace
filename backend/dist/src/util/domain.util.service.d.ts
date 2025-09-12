export declare class DomainUtilService {
    extractDomain(url: string): string;
    getHostname(url: string): string;
    getPort(url: string): string | null;
    isLocalhost(url: string): boolean;
}
