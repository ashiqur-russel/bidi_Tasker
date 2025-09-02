import { Priority } from '../types/todo.types';
export declare class CreateTodoDto {
    title: string;
    description?: string;
    completed?: boolean;
    priority?: Priority;
    dueDate?: string;
}
export declare class UpdateTodoDto {
    title?: string;
    description?: string;
    completed?: boolean;
    priority?: Priority;
    dueDate?: string;
}
export declare class TodoQueryDto {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    completed?: boolean;
    priority?: Priority;
    search?: string;
}
//# sourceMappingURL=todo.dto.d.ts.map