declare const _default: () => {
    port: number;
    database: {
        uri: string;
        name: string;
    };
    jwt: {
        secret: string;
        expiresIn: string;
    };
    cors: {
        origin: string;
        credentials: boolean;
    };
    rateLimit: {
        ttl: number;
        limit: number;
    };
    swagger: {
        title: string;
        description: string;
        version: string;
        path: string;
    };
    logging: {
        level: string;
        format: string;
    };
};
export default _default;
