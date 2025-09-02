export interface IApiEndpointConfig {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    description: string;
    tags: string[];
    auth?: boolean;
    roles?: string[];
}
export interface IApiRoute {
    prefix: string;
    endpoints: IApiEndpointConfig[];
}
export interface IApiConfig {
    port: number;
    host: string;
    prefix: string;
    version: string;
    cors: {
        origin: string | string[];
        credentials: boolean;
    };
    rateLimit: {
        windowMs: number;
        max: number;
    };
    swagger: {
        title: string;
        description: string;
        version: string;
        path: string;
    };
}
export interface IApiMiddlewareConfig {
    name: string;
    order: number;
    enabled: boolean;
}
export interface IApiValidationConfig {
    whitelist: boolean;
    forbidNonWhitelisted: boolean;
    transform: boolean;
    transformOptions: {
        enableImplicitConversion: boolean;
    };
}
export interface IApiSecurity {
    jwt: {
        secret: string;
        expiresIn: string;
        refreshExpiresIn: string;
    };
    bcrypt: {
        saltRounds: number;
    };
    cors: {
        origin: string[];
        methods: string[];
        allowedHeaders: string[];
        credentials: boolean;
    };
}
export interface IApiLogging {
    level: 'error' | 'warn' | 'info' | 'debug';
    format: 'json' | 'simple';
    transports: string[];
}
export interface IApiDatabase {
    uri: string;
    name: string;
    options: {
        useNewUrlParser: boolean;
        useUnifiedTopology: boolean;
        maxPoolSize: number;
        serverSelectionTimeoutMS: number;
        socketTimeoutMS: number;
    };
}
//# sourceMappingURL=api.types.d.ts.map