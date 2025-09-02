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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const swagger_1 = require("@nestjs/swagger");
let HealthController = class HealthController {
    health;
    mongoose;
    disk;
    memory;
    constructor(health, mongoose, disk, memory) {
        this.health = health;
        this.mongoose = mongoose;
        this.disk = disk;
        this.memory = memory;
    }
    check() {
        return this.health.check([
            () => this.mongoose.pingCheck('database'),
            () => this.disk.checkStorage('storage', {
                thresholdPercent: 0.9,
                path: '/',
            }),
            () => this.memory.checkHeap('memory_heap', 300 * 1024 * 1024),
            () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
        ]);
    }
    ready() {
        return {
            status: 'ready',
            timestamp: new Date().toISOString(),
        };
    }
    live() {
        return {
            status: 'alive',
            uptime: process.uptime(),
        };
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    (0, terminus_1.HealthCheck)(),
    (0, swagger_1.ApiOperation)({ summary: 'Check application health' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Application is healthy',
        schema: {
            type: 'object',
            properties: {
                status: { type: 'string', example: 'ok' },
                info: { type: 'object' },
                error: { type: 'object' },
                details: { type: 'object' },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "check", null);
__decorate([
    (0, common_1.Get)('ready'),
    (0, swagger_1.ApiOperation)({ summary: 'Check if application is ready to serve requests' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Application is ready',
        schema: {
            type: 'object',
            properties: {
                status: { type: 'string', example: 'ready' },
                timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "ready", null);
__decorate([
    (0, common_1.Get)('live'),
    (0, swagger_1.ApiOperation)({ summary: 'Check if application is alive' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Application is alive',
        schema: {
            type: 'object',
            properties: {
                status: { type: 'string', example: 'alive' },
                uptime: { type: 'number', example: 123.456 },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "live", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)('health'),
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [terminus_1.HealthCheckService,
        terminus_1.MongooseHealthIndicator,
        terminus_1.DiskHealthIndicator,
        terminus_1.MemoryHealthIndicator])
], HealthController);
//# sourceMappingURL=health.controller.js.map