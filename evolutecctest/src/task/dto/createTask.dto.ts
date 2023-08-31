import { taskStatus } from '../task.entity';

export class createTaskDto {
  title: string;
  description: string;
  status: taskStatus.IN_POGRESS;
}
