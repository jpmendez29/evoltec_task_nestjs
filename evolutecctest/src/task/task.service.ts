import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { task, taskStatus } from './task.entity';
import { Repository } from 'typeorm';
import { createTaskDto, updateTaskDto } from './dto/createTask.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(task) private taskRepository: Repository<task>,
  ) {}

  createTask(tsk: createTaskDto) {
    const newTask = this.taskRepository.create(tsk);
    newTask.status = taskStatus.IN_POGRESS;
    return this.taskRepository.save(newTask);
  }

  getTasks() {
    return this.taskRepository.find();
  }

  getTask(id: number) {
    return this.taskRepository.findOne({
      where: {
        id,
      },
    });
  }

  updateTask(id: number, data: updateTaskDto) {
    return this.taskRepository.update({ id }, data);
  }

  deleteTask(id: number) {
    return this.taskRepository.delete({ id });
  }
}
