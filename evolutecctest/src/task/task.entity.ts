import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum taskStatus {
  REDY = 'REDY',
  IN_POGRESS = 'IN PROGRESS',
}

@Entity({ name: 'tasks' })
export class task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  title: string;
  @Column()
  description: string;
  @Column()
  status: taskStatus;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
