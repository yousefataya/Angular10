import { Column, Entity, OneToMany , ManyToOne, JoinColumn } from "typeorm";
import { LoggerInfo } from 'src/app/entities/AI/DataScience/LoggerInfo/LoggerInfo'
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { DataTypeLookup } from 'src/app/entities/AI/Lookups/DataTypeLookup'
import { SessionAttrInfo } from 'src/app/entities/CacheManager/SessionAttrInfo'
import { TokenOperationInfo } from 'src/app/entities/Tokens/TokenInfo/TokenOperationInfo';
@Entity()
export class FormValidateRequest extends BaseEntity {

  @Column('attrName')
  attrName: string;

  @Column('clazzName')
  clazzName: string;

  @Column('ctrlName')
  ctrlName: string;

  @Column('errorName')
  errorName: string

  @Column('ruleName')
  ruleName: string

  @Column('request')
  request: string

  @Column('errorMessage')
  errorMessage:string

  @OneToMany(() => LoggerInfo, logger => logger.id)
  logger: LoggerInfo[];

  @OneToMany(() => SessionAttrInfo, session => session.id)
  sessions: SessionAttrInfo[];
  

  @ManyToOne(() => DataTypeLookup, lookup => lookup.id)
  @JoinColumn()
  lookups: DataTypeLookup

  @OneToMany(() => TokenOperationInfo, token => token.id)
  tokens: TokenOperationInfo[];

}
