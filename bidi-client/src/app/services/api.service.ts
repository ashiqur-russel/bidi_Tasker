import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Todo {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTodoDto {
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: Date;
}

export interface UpdateTodoDto {
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: Date;
}

export interface PaginationDto {
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
  byPriority: {
    low: number;
    medium: number;
    high: number;
  };
}

// NestJS API Response format
interface NestJSPaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Helper method to transform NestJS response to our format
  private transformPaginatedResponse<T>(response: NestJSPaginatedResponse<T>): PaginatedResponse<T> {
    return {
      data: response.data,
      total: response.meta.total,
      page: response.meta.page,
      limit: response.meta.limit,
      totalPages: response.meta.totalPages
    };
  }

  // Todo endpoints
  getTodos(params?: PaginationDto): Observable<PaginatedResponse<Todo>> {
    let httpParams = new HttpParams();
    if (params?.page) httpParams = httpParams.set('page', params.page.toString());
    if (params?.limit) httpParams = httpParams.set('limit', params.limit.toString());
    
    return this.http.get<NestJSPaginatedResponse<Todo>>(`${this.baseUrl}/todos`, { params: httpParams })
      .pipe(map(response => this.transformPaginatedResponse(response)));
  }

  getTodosByStatus(completed: boolean, params?: PaginationDto): Observable<PaginatedResponse<Todo>> {
    let httpParams = new HttpParams().set('completed', completed.toString());
    if (params?.page) httpParams = httpParams.set('page', params.page.toString());
    if (params?.limit) httpParams = httpParams.set('limit', params.limit.toString());
    
    return this.http.get<NestJSPaginatedResponse<Todo>>(`${this.baseUrl}/todos`, { params: httpParams })
      .pipe(map(response => this.transformPaginatedResponse(response)));
  }

  getTodosByPriority(priority: string, params?: PaginationDto): Observable<PaginatedResponse<Todo>> {
    let httpParams = new HttpParams().set('priority', priority);
    if (params?.page) httpParams = httpParams.set('page', params.page.toString());
    if (params?.limit) httpParams = httpParams.set('limit', params.limit.toString());
    
    return this.http.get<NestJSPaginatedResponse<Todo>>(`${this.baseUrl}/todos`, { params: httpParams })
      .pipe(map(response => this.transformPaginatedResponse(response)));
  }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
  }

  createTodo(todo: CreateTodoDto): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/todos`, todo);
  }

  updateTodo(id: string, todo: UpdateTodoDto): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/todos/${id}`, todo);
  }

  toggleTodoComplete(id: string): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/todos/${id}/toggle`, {});
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/todos/${id}`);
  }

  getTodoStats(): Observable<TodoStats> {
    return this.http.get<TodoStats>(`${this.baseUrl}/todos/stats`);
  }
}
