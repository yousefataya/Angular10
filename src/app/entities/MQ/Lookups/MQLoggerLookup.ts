import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MQMainLogger } from 'src/app/entities/MQ/LoggerInfo/MQMainLogger';

@Entity()
export class MQLoggerLookup extends BaseEntity {


  @Column('mqType')
  managerName: string;

  @Column('mqName')
  cacheType: string;

  @OneToMany(() => MQMainLogger, lookupMethod => lookupMethod.id)
  mainLogger: MQMainLogger[];
}
