# @tasker/shared

Shared types, DTOs, and interfaces for the Tasker application.

## 📦 **Package Overview**

This package contains all shared types, DTOs, and interfaces that are used across both the NestJS API and Angular frontend. This ensures type safety and consistency between frontend and backend.

## 🏗️ **Structure**

```
shared/
├── src/
│   ├── types/           # TypeScript interfaces and types
│   │   ├── todo.types.ts
│   │   ├── user.types.ts
│   │   ├── common.types.ts
│   │   ├── api.types.ts
│   │   └── index.ts
│   ├── dto/             # Data Transfer Objects with validation
│   │   ├── todo.dto.ts
│   │   ├── user.dto.ts
│   │   ├── common.dto.ts
│   │   └── index.ts
│   ├── interfaces/      # Service and repository interfaces
│   │   ├── todo.interface.ts
│   │   ├── user.interface.ts
│   │   ├── api.interface.ts
│   │   └── index.ts
│   └── index.ts         # Main export file
├── dist/                # Compiled JavaScript and type definitions
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 **Usage**

### **Installation**

```bash
# From the root of the monorepo
npm install @tasker/shared
```

### **Importing Types**

```typescript
// Import types
import { ITodo, Priority, ITodoCreate } from '@tasker/shared';

// Import DTOs
import { CreateTodoDto, UpdateTodoDto } from '@tasker/shared';

// Import interfaces
import { ITodoService, IAuthService } from '@tasker/shared';
```

### **Using in NestJS API**

```typescript
import { CreateTodoDto, ITodo, ITodoService } from '@tasker/shared';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: ITodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<ITodo> {
    return this.todoService.create(createTodoDto);
  }
}
```

### **Using in Angular Frontend**

```typescript
import { ITodo, CreateTodoDto, Priority } from '@tasker/shared';

export class TodoService {
  async createTodo(todo: CreateTodoDto): Promise<ITodo> {
    return this.http.post<ITodo>('/api/todos', todo).toPromise();
  }

  async getTodos(): Promise<ITodo[]> {
    return this.http.get<ITodo[]>('/api/todos').toPromise();
  }
}
```

## 📋 **Available Types**

### **Todo Types**
- `ITodo` - Todo entity interface
- `ITodoCreate` - Todo creation interface
- `ITodoUpdate` - Todo update interface
- `ITodoStats` - Todo statistics interface
- `Priority` - Priority enum (LOW, MEDIUM, HIGH)

### **User Types**
- `IUser` - User entity interface
- `IUserCreate` - User creation interface
- `IUserUpdate` - User update interface
- `IUserLogin` - Login interface
- `IUserAuth` - Authentication response interface
- `UserRole` - User role enum (USER, ADMIN)

### **Common Types**
- `IPaginatedResponse<T>` - Paginated response interface
- `IApiResponse<T>` - API response interface
- `IApiError` - API error interface
- `IQueryParams` - Query parameters interface

## 🔧 **Development**

### **Building the Package**

```bash
# Build the package
npm run build

# Watch for changes
npm run build:watch

# Clean build artifacts
npm run clean
```

### **Adding New Types**

1. Create a new type file in `src/types/`
2. Export it from `src/types/index.ts`
3. Build the package: `npm run build`
4. The new types will be available to import

### **Adding New DTOs**

1. Create a new DTO file in `src/dto/`
2. Export it from `src/dto/index.ts`
3. Build the package: `npm run build`
4. The new DTOs will be available to import

## 📝 **Best Practices**

1. **Type Safety**: Always use the shared types instead of creating local ones
2. **Validation**: Use the DTOs with validation decorators for API endpoints
3. **Consistency**: Keep the shared types in sync between frontend and backend
4. **Documentation**: Add JSDoc comments to complex types and interfaces
5. **Testing**: Test the shared types to ensure they work correctly

## 🔄 **Versioning**

This package follows semantic versioning. When making changes:

- **Patch** (1.0.x): Bug fixes and minor improvements
- **Minor** (1.x.0): New types/DTOs (backward compatible)
- **Major** (x.0.0): Breaking changes to existing types

## 📄 **License**

MIT License - see the main project LICENSE file.
