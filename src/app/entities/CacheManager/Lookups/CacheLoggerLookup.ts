import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { SessionAttrInfo } from 'src/app/entities/CacheManager/SessionAttrInfo';


@Entity()
export class CacheLoggerLookup extends BaseEntity {


  @Column('cacheType')
  cacheType: string;

  @Column('cacheKeyName')
  cacheKeyName: string;

  @Column('cacheDesscription')
  cacheDesscription: string;


  @OneToMany(() => SessionAttrInfo , session => session.id)
  sessions: SessionAttrInfo[];

}
