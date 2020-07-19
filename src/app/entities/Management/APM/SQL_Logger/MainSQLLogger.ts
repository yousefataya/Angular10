import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { HttpMainLogger } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';
@Entity()
export class MainSQLLogger extends BaseEntity {


  @Column('repoName')
  repoName: string;

  @Column('request')
  request: string;

  @Column('response')
  response: string;

  @Column('bodySignature')
  bodySignature: string;

  @Column('requestFail')
  requestFail: number;

  @Column('timeExecute')
  timeExecute: string;



  @ManyToOne(() => HttpMainLogger, sqlLogger => sqlLogger.id)
  @JoinColumn()
  httpLogger: HttpMainLogger;
  
}
