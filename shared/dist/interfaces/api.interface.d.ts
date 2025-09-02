import { Request, Response, NextFunction } from 'express';
export interface IApiMiddleware {
    use(req: Request, res: Response, next: NextFunction): void | Promise<void>;
}
export interface IApiGuard {
    canActivate(context: any): boolean | Promise<boolean>;
}
export interface IApiInterceptor {
    intercept(context: any, next: any): any;
}
export interface IApiFilter {
    catch(exception: any, host: any): any;
}
export interface IApiPipe {
    transform(value: any, metadata: any): any;
}
export interface IApiDecorator {
    (target: any, propertyKey?: string, descriptor?: PropertyDescriptor): void;
}
export interface IApiController {
    basePath: string;
    tags: string[];
}
export interface IApiEndpoint {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    summary: string;
    description?: string;
    tags: string[];
    auth?: boolean;
    roles?: string[];
    responses: {
        [statusCode: number]: {
            description: string;
            schema?: any;
        };
    };
}
export interface IApiValidation {
    validate(data: any, schema: any): Promise<{
        isValid: boolean;
        errors: string[];
    }>;
    sanitize(data: any, schema: any): any;
}
export interface IApiLogger {
    log(level: string, message: string, context?: any): void;
    error(message: string, error?: Error, context?: any): void;
    warn(message: string, context?: any): void;
    info(message: string, context?: any): void;
    debug(message: string, context?: any): void;
}
export interface IApiCache {
    get(key: string): Promise<any>;
    set(key: string, value: any, ttl?: number): Promise<void>;
    delete(key: string): Promise<void>;
    clear(): Promise<void>;
}
export interface IApiRateLimit {
    checkLimit(identifier: string, limit: number, windowMs: number): Promise<{
        allowed: boolean;
        remaining: number;
    }>;
    resetLimit(identifier: string): Promise<void>;
}
export interface IApiHealth {
    check(): Promise<{
        status: string;
        details: any;
    }>;
    isHealthy(): Promise<boolean>;
}
//# sourceMappingURL=api.interface.d.ts.map