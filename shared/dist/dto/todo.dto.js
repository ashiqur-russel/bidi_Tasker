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
exports.TodoQueryDto = exports.UpdateTodoDto = exports.CreateTodoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const todo_types_1 = require("../types/todo.types");
class CreateTodoDto {
}
exports.CreateTodoDto = CreateTodoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Todo title',
        example: 'Complete project setup',
        maxLength: 200,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo description',
        example: 'Set up the initial project structure and dependencies',
        maxLength: 1000,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo completion status',
        example: false,
        default: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateTodoDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo priority level',
        enum: todo_types_1.Priority,
        example: todo_types_1.Priority.MEDIUM,
        default: todo_types_1.Priority.MEDIUM,
    }),
    (0, class_validator_1.IsEnum)(todo_types_1.Priority),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo due date (ISO string)',
        example: '2024-12-31T00:00:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTodoDto.prototype, "dueDate", void 0);
class UpdateTodoDto {
}
exports.UpdateTodoDto = UpdateTodoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo title',
        example: 'Updated project setup',
        maxLength: 200,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo description',
        example: 'Updated project structure and dependencies',
        maxLength: 1000,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo completion status',
        example: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateTodoDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo priority level',
        enum: todo_types_1.Priority,
        example: todo_types_1.Priority.HIGH,
    }),
    (0, class_validator_1.IsEnum)(todo_types_1.Priority),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Todo due date (ISO string)',
        example: '2024-12-31T00:00:00.000Z',
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "dueDate", void 0);
class TodoQueryDto {
}
exports.TodoQueryDto = TodoQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Page number',
        example: 1,
        default: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TodoQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Items per page',
        example: 10,
        default: 10,
        minimum: 1,
        maximum: 100,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TodoQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Sort by field',
        example: 'createdAt',
        default: 'createdAt',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TodoQueryDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Sort order',
        enum: ['asc', 'desc'],
        example: 'desc',
        default: 'desc',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TodoQueryDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by completion status',
        example: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], TodoQueryDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by priority',
        enum: todo_types_1.Priority,
        example: todo_types_1.Priority.HIGH,
    }),
    (0, class_validator_1.IsEnum)(todo_types_1.Priority),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TodoQueryDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Search in title and description',
        example: 'project',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TodoQueryDto.prototype, "search", void 0);
//# sourceMappingURL=todo.dto.js.map