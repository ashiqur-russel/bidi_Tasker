import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { PaginatedResponseDto } from '../common/decorators/api-paginated-response.decorator';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(paginationDto: PaginationDto): Promise<PaginatedResponseDto<Todo>>;
    findOne(id: string): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    remove(id: string): Promise<Todo>;
    findByStatus(completed: boolean, paginationDto: PaginationDto): Promise<PaginatedResponseDto<Todo>>;
    findByPriority(priority: string, paginationDto: PaginationDto): Promise<PaginatedResponseDto<Todo>>;
    toggleComplete(id: string): Promise<Todo>;
    getStats(): Promise<{
        total: number;
        completed: number;
        pending: number;
        byPriority: Record<string, number>;
    }>;
}
