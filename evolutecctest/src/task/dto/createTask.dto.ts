import { taskStatus } from '../task.entity';

export class createTaskDto {
  title: string;
  description: string;
}

export type updateTaskDto = Omit<createTaskDto, 'title' | 'description'> & {
  title?: string;
  description?: string;
  status?: taskStatus;
};
