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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const todo_schema_1 = require("./schemas/todo.schema");
const api_paginated_response_decorator_1 = require("../common/decorators/api-paginated-response.decorator");
let TodoController = class TodoController {
    todoService;
    constructor(todoService) {
        this.todoService = todoService;
    }
    create(createTodoDto) {
        return this.todoService.create(createTodoDto);
    }
    findAll(completed, priority, paginationDto = new pagination_dto_1.PaginationDto()) {
        if (completed !== undefined) {
            return this.todoService.findByStatus(completed === 'true', paginationDto);
        }
        if (priority) {
            return this.todoService.findByPriority(priority, paginationDto);
        }
        return this.todoService.findAll(paginationDto);
    }
    getStats() {
        return this.todoService.getStats();
    }
    findOne(id) {
        return this.todoService.findOne(id);
    }
    update(id, updateTodoDto) {
        return this.todoService.update(id, updateTodoDto);
    }
    toggleComplete(id) {
        return this.todoService.toggleComplete(id);
    }
    remove(id) {
        return this.todoService.remove(id);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new todo' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Todo created successfully',
        type: todo_schema_1.Todo,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all todos with pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'completed', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'priority', required: false, type: String }),
    (0, api_paginated_response_decorator_1.ApiPaginatedResponse)(todo_schema_1.Todo),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Todos retrieved successfully' }),
    __param(0, (0, common_1.Query)('completed')),
    __param(1, (0, common_1.Query)('priority')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get todo statistics' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Statistics retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                total: { type: 'number' },
                completed: { type: 'number' },
                pending: { type: 'number' },
                byPriority: {
                    type: 'object',
                    properties: {
                        low: { type: 'number' },
                        medium: { type: 'number' },
                        high: { type: 'number' },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific todo by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Todo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Todo retrieved successfully',
        type: todo_schema_1.Todo,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Todo not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid ID format' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a todo' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Todo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Todo updated successfully',
        type: todo_schema_1.Todo,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Todo not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request or invalid ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/toggle'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle todo completion status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Todo ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Todo completion status toggled successfully',
        type: todo_schema_1.Todo,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Todo not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid ID format' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "toggleComplete", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a todo' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Todo ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Todo deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Todo not found' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid ID format' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "remove", null);
exports.TodoController = TodoController = __decorate([
    (0, swagger_1.ApiTags)('todos'),
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map