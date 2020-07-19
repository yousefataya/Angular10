import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { HttpMainLogger  } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';
import { MQLoggerLookup } from 'src/app/entities/MQ/Lookups/MQLoggerLookup';
@Entity()
export class MQMainLogger extends BaseEntity {


  @Column('queueName')
  managerName: string;

  @Column('queueKey')
  cacheType: string;

  @Column('destination')
  destination: string;

  @Column('request')
  request: string;

  @Column('response')
  response: string;

  @Column('acceptSignature')
  acceptSignature: string;

  @Column('rejectSignature')
  rejectSignature: string;

  @Column('status')
  status: boolean;

  @ManyToOne(() => HttpMainLogger, httpLogger => httpLogger.id)
  @JoinColumn()
  httpsLogger: HttpMainLogger;

  @ManyToOne(() => MQLoggerLookup, mqLookup => mqLookup.id)
  @JoinColumn()
  mqLookup: MQLoggerLookup;
}
