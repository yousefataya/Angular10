import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";



@Entity()
export class OpsTypeLookup extends BaseEntity {


  @Column('rlType')
  loggerText: string;

  @Column('rlKey')
  rlKey: string;

  @Column('description')
  ctrlName: string;


}
