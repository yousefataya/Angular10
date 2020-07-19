import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { TaskScheduler } from 'src/app/entities/CronJobs/Scheduler/TaskScheduler';

@Entity()
export class SchedulerLookup extends BaseEntity {


  @Column('scheduleType')
  mlRuleLoggerType: string;

  @Column('scheduleKey')
  ruleKey: string;

  @Column('status')
  ruleValue: string;


  @OneToMany(() => TaskScheduler, tasks => tasks.id)
  tasksSchedulr: TaskScheduler[];
}
