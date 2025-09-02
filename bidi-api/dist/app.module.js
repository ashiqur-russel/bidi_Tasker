"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const terminus_1 = require("@nestjs/terminus");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const todo_module_1 = require("./todo/todo.module");
const health_controller_1 = require("./health/health.controller");
const configuration_1 = require("./config/configuration");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
                envFilePath: ['.env.local', '.env'],
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/bidi_todo?authSource=admin', {
                connectionFactory: (connection) => {
                    connection.on('connected', () => {
                        console.log('MongoDB is connected');
                    });
                    connection.on('error', (error) => {
                        console.error('MongoDB connection error:', error);
                    });
                    connection.on('disconnected', () => {
                        console.log('MongoDB is disconnected');
                    });
                    return connection;
                },
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60,
                    limit: 100,
                },
            ]),
            terminus_1.TerminusModule,
            auth_module_1.AuthModule,
            todo_module_1.TodoModule,
        ],
        controllers: [app_controller_1.AppController, health_controller_1.HealthController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map