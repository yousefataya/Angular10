import { Column, Entity, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { SessionAttrInfo } from 'src/app/entities/CacheManager/SessionAttrInfo';
import { SessionInfo } from 'src/app/entities/CacheManager/SessionInfo';

@Entity()
export class SessionCacheInfo extends BaseEntity {


  @Column('recordHash')
  recordHash: string;

  @Column('recordSignature')
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

  @OneToMany(() => SessionAttrInfo, attr => attr.id)
  attrs: SessionAttrInfo[];

  @ManyToOne(() => SessionInfo, info => info.id)
  @JoinColumn()
  session: SessionInfo;

}
