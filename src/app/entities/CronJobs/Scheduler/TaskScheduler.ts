import { Column, Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { SchedulerLookup } from 'src/app/entities/CronJobs/Lookups/SchedulerLookup';
import { TaskLookup } from 'src/app/entities/CronJobs/Lookups/TaskLookup';
import { HttpMainLogger } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';
@Entity()
export class TaskScheduler extends BaseEntity {


  @Column('taskHash')
  recordHash: string;

  @Column('taskSignature')
  recordSignature: string;

  @Column('secretMethod')
  secretMethod: string;

  @Column('failAttempt')
  failAttempt: string;

  @Column('response')
  response: string;

  @Column('failSignature')
  failSignature: string;

  @Column('request')
  request: string;

  @Column('formValidation')
  formValidation: boolean

  @Column('formValidateFrequency')
  formValidateFrequency: number;

  @Column('hasParent')
  hasParent: boolean;

  @Column('properties')
  properties: string

  @OneToOne(() => TaskScheduler, parent => parent.id)
  @JoinColumn()
  taskParent: TaskScheduler;

  @ManyToOne(() => SchedulerLookup, schedule => schedule.id)
  @JoinColumn()
  scheduleLookup: SchedulerLookup;


  @ManyToOne(() => TaskLookup, schedule => schedule.id)
  @JoinColumn()
  taskLookup: TaskLookup;

  @OneToMany(() => HttpMainLogger, tasksScheduler => tasksScheduler.id)
  mainLogger: HttpMainLogger[];
}
