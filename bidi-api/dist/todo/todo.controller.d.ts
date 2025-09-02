import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Todo } from './schemas/todo.schema';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(completed?: string, priority?: string, paginationDto?: PaginationDto): Promise<import("../common/decorators/api-paginated-response.decorator").PaginatedResponseDto<Todo>>;
    getStats(): Promise<{
        total: number;
        completed: number;
        pending: number;
        byPriority: Record<string, number>;
    }>;
    findOne(id: string): Promise<Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    toggleComplete(id: string): Promise<Todo>;
    remove(id: string): Promise<Todo>;
}
