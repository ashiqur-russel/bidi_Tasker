import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResponseDto } from '../common/decorators/api-paginated-response.decorator';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    try {
      const createdTodo = new this.todoModel(createTodoDto);
      return await createdTodo.save();
    } catch (error) {
      throw new BadRequestException('Failed to create todo');
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<PaginatedResponseDto<Todo>> {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationDto;
    
    const skip = (page - 1) * limit;
    const sort: any = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

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

  async findOne(id: string): Promise<Todo> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid todo ID format');
    }

    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid todo ID format');
    }

    const updatedTodo = await this.todoModel
      .findByIdAndUpdate(id, updateTodoDto, { new: true, runValidators: true })
      .exec();
    if (!updatedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return updatedTodo;
  }

  async remove(id: string): Promise<Todo> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid todo ID format');
    }

    const deletedTodo = await this.todoModel.findByIdAndDelete(id).exec();
    if (!deletedTodo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return deletedTodo;
  }

  async findByStatus(completed: boolean, paginationDto: PaginationDto): Promise<PaginatedResponseDto<Todo>> {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationDto;
    
    const skip = (page - 1) * limit;
    const sort: any = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

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

  async findByPriority(priority: string, paginationDto: PaginationDto): Promise<PaginatedResponseDto<Todo>> {
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = paginationDto;
    
    const skip = (page - 1) * limit;
    const sort: any = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

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

  async toggleComplete(id: string): Promise<Todo> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException('Invalid todo ID format');
    }

    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    todo.completed = !todo.completed;
    return todo.save();
  }

  async getStats(): Promise<{ total: number; completed: number; pending: number; byPriority: Record<string, number> }> {
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
    }, {} as Record<string, number>);

    return {
      total,
      completed,
      pending,
      byPriority: priorityStats,
    };
  }
}
