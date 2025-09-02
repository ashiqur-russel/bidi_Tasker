import { HealthCheckService, MongooseHealthIndicator, DiskHealthIndicator, MemoryHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private health;
    private mongoose;
    private disk;
    private memory;
    constructor(health: HealthCheckService, mongoose: MongooseHealthIndicator, disk: DiskHealthIndicator, memory: MemoryHealthIndicator);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
    ready(): {
        status: string;
        timestamp: string;
    };
    live(): {
        status: string;
        uptime: number;
    };
}
