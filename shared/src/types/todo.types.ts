export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface ITodo {
  _id?: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoCreate {
  title: string;
  description?: string;
  completed?: boolean;
  priority?: Priority;
  dueDate?: string;
}

export interface ITodoUpdate {
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: Priority;
  dueDate?: string;
}

export interface ITodoStats {
  total: number;
  completed: number;
  pending: number;
  byPriority: {
    high: number;
    medium: number;
    low: number;
  };
  completionRate: number;
}

export interface ITodoFilters {
  completed?: boolean;
  priority?: Priority;
  search?: string;
}

export interface ITodoSort {
  field: keyof ITodo;
  order: 'asc' | 'desc';
}
