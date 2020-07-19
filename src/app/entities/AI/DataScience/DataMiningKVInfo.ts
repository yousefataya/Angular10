import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
@Entity()
export class DataMiningKVinfo extends BaseEntity {


  @Column('attrName')
  attrName: string;

  @Column('keyName')
  clazzName: string;

  @Column('ctrlName')
  ctrlName: string;

  @Column('kv_value')
  value: string

  @Column('description')
  val: string

  @Column('request')
  request: string

  @Column('errorMessage')
  errorMessage: string

}
