import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class ModelTypeLookup extends BaseEntity {


  @Column('dataType')
  modelType: string;

  @Column('dataKeyName')
  modelKeyName: string;

  @Column('dataVal')
  modelVal: string;

 
}
