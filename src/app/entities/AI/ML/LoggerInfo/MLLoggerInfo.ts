import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MLRule } from "src/app/entities/AI/ML/MLRule";
import { MLRuleTypeLookup } from "src/app/entities/AI/ML/Lookups/MLRuleTypeLookup";
import { MainLogger } from 'src/app/entities/Logger/MainInfo/MainLogger';


@Entity()
export class MLLoggerInfo extends BaseEntity {


  @Column('loggerText')
  loggerText: string;

  @Column('clazzName')
  clazzName: string;

  @Column('ctrlName')
  ctrlName: string;

  @Column('execption')
  execption: string;

  @Column('response')
  response: string;

  @Column('request')
  request: string;

  @Column('formValidation')
  formValidation: boolean

  @Column('formValidateFrequency')
  formValidateFrequency: number;

  @ManyToOne(() => MLRule, rule => rule.id)
  @JoinColumn()
  rule: MLRule;

  @ManyToOne(() => MLRuleTypeLookup, lookup => lookup.id)
  @JoinColumn()
  lookups: MLRuleTypeLookup;

  @OneToMany(() => MainLogger, logger => logger.id)
  mainLogger: MainLogger[];

}
