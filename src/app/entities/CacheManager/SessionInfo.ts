import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { SessionCacheInfo } from 'src/app/entities/CacheManager/SessionCacheInfo'

@Entity()
export class SessionInfo extends BaseEntity {


  @Column('sessionHash')
  recordHash: string;

  @Column('sessionSignature')
  recordSignature: string;

  @Column('secretMethod')
  secretMethod: string;

  @Column('failAttempt')
  failAttempt: string;

  @Column('response')
  response: string;

  @Column('failSignature')
  failSignature: string;

  @Column('request')
  request: string;

  @Column('formValidation')
  formValidation: boolean

  @Column('formValidateFrequency')
  formValidateFrequency: number;

  @OneToMany(() => SessionCacheInfo, cache => cache.id)
  caches: SessionCacheInfo[];


}
