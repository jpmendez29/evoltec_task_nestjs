import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { createTaskDto, updateTaskDto } from './dto/createTask.dto';
import { TaskService } from './task.service';
import { task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(): Promise<task[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number): Promise<task> {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() newTaks: createTaskDto): Promise<task> {
    return this.taskService.createTask(newTaks);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: updateTaskDto,
  ) {
    return this.taskService.updateTask(id, data);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteTask(id);
  }
}
