import { Column, Entity , OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { FormValidateRequest } from 'src/app/entities/AI/DataScience/FormValidateRequest'

@Entity()
export class DataTypeLookup extends BaseEntity {


  @Column('dataType')
  dataType: string;

  @Column('dataKeyName')
  dataKeyName: string;

  @Column('dataVal')
  dataVal: string;

  @OneToMany(() => FormValidateRequest, request => request.id)
  request: FormValidateRequest[];
  
}
