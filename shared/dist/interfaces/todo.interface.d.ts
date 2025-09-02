import { ITodo, ITodoCreate, ITodoUpdate, ITodoStats, ITodoFilters, ITodoSort, IPaginatedResponse } from '../types';
export interface ITodoService {
    findAll(filters?: ITodoFilters, pagination?: {
        page: number;
        limit: number;
    }, sort?: ITodoSort): Promise<IPaginatedResponse<ITodo>>;
    findById(id: string): Promise<ITodo>;
    create(createTodoDto: ITodoCreate): Promise<ITodo>;
    update(id: string, updateTodoDto: ITodoUpdate): Promise<ITodo>;
    delete(id: string): Promise<void>;
    toggleComplete(id: string): Promise<ITodo>;
    getStats(): Promise<ITodoStats>;
    findByStatus(completed: boolean): Promise<ITodo[]>;
    findByPriority(priority: string): Promise<ITodo[]>;
}
export interface ITodoRepository {
    findAll(filters?: ITodoFilters, pagination?: {
        page: number;
        limit: number;
    }, sort?: ITodoSort): Promise<IPaginatedResponse<ITodo>>;
    findById(id: string): Promise<ITodo>;
    create(todo: ITodoCreate): Promise<ITodo>;
    update(id: string, todo: ITodoUpdate): Promise<ITodo>;
    delete(id: string): Promise<void>;
    findByStatus(completed: boolean): Promise<ITodo[]>;
    findByPriority(priority: string): Promise<ITodo[]>;
    count(filters?: ITodoFilters): Promise<number>;
}
export interface ITodoController {
    findAll(query: any): Promise<IPaginatedResponse<ITodo>>;
    findById(id: string): Promise<ITodo>;
    create(createTodoDto: ITodoCreate): Promise<ITodo>;
    update(id: string, updateTodoDto: ITodoUpdate): Promise<ITodo>;
    delete(id: string): Promise<void>;
    toggleComplete(id: string): Promise<ITodo>;
    getStats(): Promise<ITodoStats>;
}
//# sourceMappingURL=todo.interface.d.ts.map