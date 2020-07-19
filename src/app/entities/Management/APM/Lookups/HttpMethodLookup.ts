import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { HttpMainLogger  } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';

@Entity()
export class HttpMethodLookup extends BaseEntity {


  @Column('methodName')
  managerName: string;

  @Column('methodType')
  cacheType: string;

  @OneToMany(() => HttpMainLogger, lookupMethod => lookupMethod.id)
  mainLogger: HttpMainLogger[];
}
