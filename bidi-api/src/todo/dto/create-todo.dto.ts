import { IsString, IsOptional, IsBoolean, IsDateString, IsEnum, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export class CreateTodoDto {
  @ApiProperty({
    description: 'Todo title',
    example: 'Complete project setup',
    maxLength: 200,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @ApiPropertyOptional({
    description: 'Todo description',
    example: 'Set up the initial project structure and dependencies',
    maxLength: 1000,
  })
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @ApiPropertyOptional({
    description: 'Todo completion status',
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @ApiPropertyOptional({
    description: 'Todo priority level',
    enum: Priority,
    example: Priority.MEDIUM,
    default: Priority.MEDIUM,
  })
  @IsEnum(Priority)
  @IsOptional()
  priority?: Priority;

  @ApiPropertyOptional({
    description: 'Todo due date (ISO string)',
    example: '2024-12-31T00:00:00.000Z',
  })
  @IsDateString()
  @IsOptional()
  dueDate?: string;
}
