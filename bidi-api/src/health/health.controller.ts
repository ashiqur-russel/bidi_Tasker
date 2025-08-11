import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  MongooseHealthIndicator,
  DiskHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private mongoose: MongooseHealthIndicator,
    private disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  @ApiOperation({ summary: 'Check application health' })
  @ApiResponse({
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
  })
  check() {
    return this.health.check([
      // Database health check
      () => this.mongoose.pingCheck('database'),
      
      // Disk health check
      () =>
        this.disk.checkStorage('storage', {
          thresholdPercent: 0.9,
          path: '/',
        }),
      
      // Memory health check
      () =>
        this.memory.checkHeap('memory_heap', 300 * 1024 * 1024), // 300MB
      () =>
        this.memory.checkRSS('memory_rss', 300 * 1024 * 1024), // 300MB
    ]);
  }

  @Get('ready')
  @ApiOperation({ summary: 'Check if application is ready to serve requests' })
  @ApiResponse({
    status: 200,
    description: 'Application is ready',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'ready' },
        timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
      },
    },
  })
  ready() {
    return {
      status: 'ready',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('live')
  @ApiOperation({ summary: 'Check if application is alive' })
  @ApiResponse({
    status: 200,
    description: 'Application is alive',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'alive' },
        uptime: { type: 'number', example: 123.456 },
      },
    },
  })
  live() {
    return {
      status: 'alive',
      uptime: process.uptime(),
    };
  }
}

