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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const todo_schema_1 = require("./schemas/todo.schema");
let TodoService = class TodoService {
    todoModel;
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async create(createTodoDto) {
        try {
            const createdTodo = new this.todoModel(createTodoDto);
            return await createdTodo.save();
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create todo');
        }
    }
    async findAll(paginationDto) {
        const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationDto;
        const skip = (page - 1) * limit;
        const sort = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };
        const [data, total] = await Promise.all([
            this.todoModel
                .find()
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .exec(),
            this.todoModel.countDocuments().exec(),
        ]);
        const totalPages = Math.ceil(total / limit);
        const hasNext = page < totalPages;
        const hasPrev = page > 1;
        return {
            data,
            meta: {
                page,
                limit,
                total,
                totalPages,
                hasNext,
                hasPrev,
            },
        };
    }
    async findOne(id) {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new common_1.BadRequestException('Invalid todo ID format');
        }
        const todo = await this.todoModel.findById(id).exec();
        if (!todo) {
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        }
        return todo;
    }
    async update(id, updateTodoDto) {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new common_1.BadRequestException('Invalid todo ID format');
        }
        const updatedTodo = await this.todoModel
            .findByIdAndUpdate(id, updateTodoDto, { new: true, runValidators: true })
            .exec();
        if (!updatedTodo) {
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        }
        return updatedTodo;
    }
    async remove(id) {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new common_1.BadRequestException('Invalid todo ID format');
        }
        const deletedTodo = await this.todoModel.findByIdAndDelete(id).exec();
        if (!deletedTodo) {
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        }
        return deletedTodo;
    }
    async findByStatus(completed, paginationDto) {
        const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationDto;
        const skip = (page - 1) * limit;
        const sort = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };
        const [data, total] = await Promise.all([
            this.todoModel
                .find({ completed })
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .exec(),
            this.todoModel.countDocuments({ completed }).exec(),
        ]);
        const totalPages = Math.ceil(total / limit);
        const hasNext = page < totalPages;
        const hasPrev = page > 1;
        return {
            data,
            meta: {
                page,
                limit,
                total,
                totalPages,
                hasNext,
                hasPrev,
            },
        };
    }
    async findByPriority(priority, paginationDto) {
        const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationDto;
        const skip = (page - 1) * limit;
        const sort = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };
        const [data, total] = await Promise.all([
            this.todoModel
                .find({ priority })
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .exec(),
            this.todoModel.countDocuments({ priority }).exec(),
        ]);
        const totalPages = Math.ceil(total / limit);
        const hasNext = page < totalPages;
        const hasPrev = page > 1;
        return {
            data,
            meta: {
                page,
                limit,
                total,
                totalPages,
                hasNext,
                hasPrev,
            },
        };
    }
    async toggleComplete(id) {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new common_1.BadRequestException('Invalid todo ID format');
        }
        const todo = await this.todoModel.findById(id).exec();
        if (!todo) {
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        }
        todo.completed = !todo.completed;
        return todo.save();
    }
    async getStats() {
        const [total, completed, pending, byPriority] = await Promise.all([
            this.todoModel.countDocuments().exec(),
            this.todoModel.countDocuments({ completed: true }).exec(),
            this.todoModel.countDocuments({ completed: false }).exec(),
            this.todoModel.aggregate([
                { $group: { _id: '$priority', count: { $sum: 1 } } },
                { $project: { priority: '$_id', count: 1, _id: 0 } },
            ]).exec(),
        ]);
        const priorityStats = byPriority.reduce((acc, item) => {
            acc[item.priority] = item.count;
            return acc;
        }, {});
        return {
            total,
            completed,
            pending,
            byPriority: priorityStats,
        };
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(todo_schema_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodoService);
//# sourceMappingURL=todo.service.js.map