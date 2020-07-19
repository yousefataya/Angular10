import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MainLogger } from "src/app/entities/Logger/MainInfo/MainLogger";
import { SessionAttrInfo } from 'src/app/entities/CacheManager/SessionAttrInfo';
import { TaskScheduler } from 'src/app/entities/CronJobs/Scheduler/TaskScheduler';
import { HttpMethodLookup } from 'src/app/entities/Management/APM/Lookups/HttpMethodLookup';
import { MainSQLLogger } from 'src/app/entities/Management/APM/SQL_Logger/MainSQLLogger';
import {MQMainLogger } from 'src/app/entities/MQ/LoggerInfo/MQMainLogger';
import { RequestFailInfo } from 'src/app/entities/Settings/RequestFailInfo';
import { RequestSucessInfo } from 'src/app/entities/Settings/RequestSucessInfo';
import { ResponseFailInfo } from 'src/app/entities/Settings/ResponseFailInfo';
import { ResponseSucessInfo } from 'src/app/entities/Settings/ResponseSucessInfo';
import {TransactionMainInfo } from 'src/app/entities/Transactions/TransactionInfo/TransactionMainInfo';

@Entity()
export class HttpMainLogger extends BaseEntity {


  @Column('methodType')
  methodType: string;

  @Column('methodHeader')
  methodHeader: string;

  @Column('requestBody')
  requestBody: string;

  @Column('bodySignature')
  bodySignature: string;

  @Column('pageName')
  pageName: string;

  @ManyToOne(() => TransactionMainInfo, transaction => transaction.id)
  @JoinColumn()
  transaction: TransactionMainInfo;

  @ManyToOne(() => SessionAttrInfo, atts => atts.id)
  @JoinColumn()
  attsInfo: SessionAttrInfo;

  @ManyToOne(() => MainLogger, ml => ml.id)
  @JoinColumn()
  mlLogger: MainLogger;

  @ManyToOne(() => TaskScheduler, tasks => tasks.id)
  @JoinColumn()
  tasksScheduler: TaskScheduler;


  @ManyToOne(() => HttpMethodLookup, lookups => lookups.id)
  @JoinColumn()
  lookupMethod: HttpMethodLookup;

  @OneToMany(() => MainSQLLogger, sqlLogger => sqlLogger.id)
  sqlLogger: MainSQLLogger[];

  @OneToMany(() => MQMainLogger, mqLogger => mqLogger.id)
  mqLogger: MQMainLogger[];

  @OneToMany(() => RequestFailInfo, requests => requests.id)
  failLogger: RequestFailInfo[];

  @OneToMany(() => RequestSucessInfo, successInfo => successInfo.id)
  successLogger: RequestSucessInfo[];

  @OneToMany(() => ResponseFailInfo, fail => fail.id)
  fails: ResponseFailInfo[];

  @OneToMany(() => ResponseSucessInfo, success => success.id)
  successes: ResponseSucessInfo[];

}
