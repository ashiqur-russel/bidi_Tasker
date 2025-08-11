import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Priority } from '../dto/create-todo.dto';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ enum: Priority, default: Priority.MEDIUM })
  priority: Priority;

  @Prop()
  dueDate?: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

