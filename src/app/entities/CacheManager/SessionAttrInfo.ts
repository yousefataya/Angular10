import { Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MLLoggerInfo } from "src/app/entities/AI/ML/LoggerInfo/MLLoggerInfo";
import { CacheLoggerLookup } from "src/app/entities/CacheManager/Lookups/CacheLoggerLookup";
import { CacheManagerLogger } from "src/app/entities/CacheManager/CacheLogger/CacheManagerLogger";
import { FormValidateRequest } from "src/app/entities/AI/DataScience/FormValidateRequest";
import { SessionCacheInfo } from 'src/app/entities/CacheManager/SessionCacheInfo'
import { HttpMainLogger } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';
import { TokenOperationInfo } from 'src/app/entities/Tokens/TokenInfo/TokenOperationInfo';


@Entity()
export class SessionAttrInfo extends BaseEntity {


  @Column('attName')
  attName: string;

  @Column('attType')
  attType: string;

  @Column('attKey')
  attKey: string;

  @Column('attValue')
  attValue: string;

  @Column('response')
  response: string;

  @Column('request')
  request: string;

  @Column('formValidation')
  formValidation: boolean

  @Column('formValidateFrequency')
  formValidateFrequency: number;

  

  @ManyToOne(() => FormValidateRequest, forms => forms.id)
  @JoinColumn()
  forms: FormValidateRequest;


  @OneToMany(() => MLLoggerInfo, logger => logger.id)
  logger: MLLoggerInfo[];

  @OneToMany(() => HttpMainLogger, http => http.id)
  httpLogger: HttpMainLogger[];

  @ManyToOne(() => CacheLoggerLookup, type => type.id)
  @JoinColumn()
  types: CacheLoggerLookup;


  @ManyToOne(() => CacheManagerLogger, logger => logger.id)
  @JoinColumn()
  loggerType: CacheManagerLogger;


  @ManyToOne(() => SessionCacheInfo, cache => cache.id)
  @JoinColumn()
  cache: SessionCacheInfo;

  @OneToMany(() => TokenOperationInfo, token => token.id)
  tokens: TokenOperationInfo[];
}
