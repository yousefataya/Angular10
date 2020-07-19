import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MLLoggerInfo } from "src/app/entities/AI/ML/LoggerInfo/MLLoggerInfo";
import { LoggerInfo } from "src/app/entities/AI/DataScience/LoggerInfo/LoggerInfo";
import { HttpMainLogger} from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';

@Entity()
export class MainLogger extends BaseEntity {


  @Column('loggerDate')
  loggerText: Date;

  @Column('historyDate')
  clazzName: Date;

  @Column('isHistory')
  ctrlName: string;

  @Column('execptionType')
  execption: string;

  @Column('isView')
  isView: boolean;

  @Column('isMarked')
  isMarked: boolean;

  @Column('description')
  description: string;

  @Column('notes')
  notes: string;

  @ManyToOne(() => MLLoggerInfo, ml => ml.id)
  @JoinColumn()
  mlLogger: MLLoggerInfo;

  @ManyToOne(() => LoggerInfo, science => science.id)
  @JoinColumn()
  lookups: LoggerInfo;

  @OneToMany(() => HttpMainLogger, mainLogger => mainLogger.id)
  httpLogger: HttpMainLogger[];

}
