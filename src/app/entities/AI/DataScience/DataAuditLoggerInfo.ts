import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
@Entity()
export class DataMiningKVinfo extends BaseEntity{

 
  @Column('loggerText')
  loggerText: string;

  @Column('clazzName')
  clazzName: string;

  @Column('ctrlName')
  ctrlName: string;

  @Column('execptionHeader')
  execptionHeader: string

  @Column('execptionDetail')
  execptionDetail: string

  @Column('request')
  request: string

  @Column('errorMessage')
  errorMessage: string

}
