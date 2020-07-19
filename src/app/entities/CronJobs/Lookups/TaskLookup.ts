import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { TaskScheduler } from 'src/app/entities/CronJobs/Scheduler/TaskScheduler';

@Entity()
export class TaskLookup extends BaseEntity {


  @Column('taskType')
  taskType: string;

  @Column('taskKey')
  taskKey: string;

  @Column('taskName')
  taskName: string;

  @Column('status')
  status: string;

  @OneToMany(() => TaskScheduler, tasks => tasks.id)
  tasksSchedulr: TaskScheduler[];

}
