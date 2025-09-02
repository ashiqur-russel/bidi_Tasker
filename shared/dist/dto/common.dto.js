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
exports.PaginatedResponseDto = exports.ApiResponseDto = exports.FilterDto = exports.SearchDto = exports.PaginationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class PaginationDto {
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Page number',
        example: 1,
        default: 1,
        minimum: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Items per page',
        example: 10,
        default: 10,
        minimum: 1,
        maximum: 100,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Sort by field',
        example: 'createdAt',
        default: 'createdAt',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationDto.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Sort order',
        enum: ['asc', 'desc'],
        example: 'desc',
        default: 'desc',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['asc', 'desc']),
    __metadata("design:type", String)
], PaginationDto.prototype, "sortOrder", void 0);
class SearchDto {
}
exports.SearchDto = SearchDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Search query',
        example: 'project setup',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SearchDto.prototype, "q", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Search in specific fields',
        example: ['title', 'description'],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], SearchDto.prototype, "fields", void 0);
class FilterDto {
}
exports.FilterDto = FilterDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by status',
        example: 'active',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by category',
        example: 'work',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by date range (start)',
        example: '2024-01-01',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter by date range (end)',
        example: '2024-12-31',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FilterDto.prototype, "endDate", void 0);
class ApiResponseDto {
}
exports.ApiResponseDto = ApiResponseDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Success status',
        example: true,
    }),
    __metadata("design:type", Boolean)
], ApiResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Response data',
    }),
    __metadata("design:type", Object)
], ApiResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Response message',
        example: 'Operation completed successfully',
    }),
    __metadata("design:type", String)
], ApiResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Error message',
        example: 'Something went wrong',
    }),
    __metadata("design:type", String)
], ApiResponseDto.prototype, "error", void 0);
class PaginatedResponseDto {
}
exports.PaginatedResponseDto = PaginatedResponseDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Response data array',
    }),
    __metadata("design:type", Array)
], PaginatedResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Pagination metadata',
    }),
    __metadata("design:type", Object)
], PaginatedResponseDto.prototype, "meta", void 0);
//# sourceMappingURL=common.dto.js.map