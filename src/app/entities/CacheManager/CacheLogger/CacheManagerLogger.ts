import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { SessionAttrInfo } from 'src/app/entities/CacheManager/SessionAttrInfo';

@Entity()
export class CacheManagerLogger extends BaseEntity {


  @Column('cacheName')
  managerName: string;

  @Column('cacheType')
  cacheType: string;

  @Column('status')
  status: boolean;


  @OneToMany(() => SessionAttrInfo, session => session.id)
  sessions: SessionAttrInfo[];
}
