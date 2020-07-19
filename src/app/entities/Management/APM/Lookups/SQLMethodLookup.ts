import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { HttpMainLogger } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';

@Entity()
export class SQLMethodLookup extends BaseEntity {


  @Column('sqlTableName')
  managerName: string;

  @Column('crudType')
  cacheType: string;

  @OneToMany(() => HttpMainLogger, lookupMethod => lookupMethod.id)
  mainLogger: HttpMainLogger[];
}
