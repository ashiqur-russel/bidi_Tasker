import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Todo } from './schemas/todo.schema';
import { ApiPaginatedResponse } from '../common/decorators/api-paginated-response.decorator';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new todo' })
  @ApiResponse({
    status: 201,
    description: 'Todo created successfully',
    type: Todo,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all todos with pagination' })
  @ApiQuery({ name: 'completed', required: false, type: String })
  @ApiQuery({ name: 'priority', required: false, type: String })
  @ApiPaginatedResponse(Todo)
  @ApiResponse({ status: 200, description: 'Todos retrieved successfully' })
  findAll(
    @Query('completed') completed?: string,
    @Query('priority') priority?: string,
    @Query() paginationDto: PaginationDto = new PaginationDto(),
  ) {
    if (completed !== undefined) {
      return this.todoService.findByStatus(completed === 'true', paginationDto);
    }
    if (priority) {
      return this.todoService.findByPriority(priority, paginationDto);
    }
    return this.todoService.findAll(paginationDto);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get todo statistics' })
  @ApiResponse({
    status: 200,
    description: 'Statistics retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        total: { type: 'number' },
        completed: { type: 'number' },
        pending: { type: 'number' },
        byPriority: {
          type: 'object',
          properties: {
            low: { type: 'number' },
            medium: { type: 'number' },
            high: { type: 'number' },
          },
        },
      },
    },
  })
  getStats() {
    return this.todoService.getStats();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific todo by ID' })
  @ApiParam({ name: 'id', description: 'Todo ID' })
  @ApiResponse({
    status: 200,
    description: 'Todo retrieved successfully',
    type: Todo,
  })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  @ApiResponse({ status: 400, description: 'Invalid ID format' })
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a todo' })
  @ApiParam({ name: 'id', description: 'Todo ID' })
  @ApiResponse({
    status: 200,
    description: 'Todo updated successfully',
    type: Todo,
  })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  @ApiResponse({ status: 400, description: 'Bad request or invalid ID' })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Patch(':id/toggle')
  @ApiOperation({ summary: 'Toggle todo completion status' })
  @ApiParam({ name: 'id', description: 'Todo ID' })
  @ApiResponse({
    status: 200,
    description: 'Todo completion status toggled successfully',
    type: Todo,
  })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  @ApiResponse({ status: 400, description: 'Invalid ID format' })
  toggleComplete(@Param('id') id: string) {
    return this.todoService.toggleComplete(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a todo' })
  @ApiParam({ name: 'id', description: 'Todo ID' })
  @ApiResponse({ status: 204, description: 'Todo deleted successfully' })
  @ApiResponse({ status: 404, description: 'Todo not found' })
  @ApiResponse({ status: 400, description: 'Invalid ID format' })
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
