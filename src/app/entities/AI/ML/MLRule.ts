import { Column, Entity , OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MLLoggerInfo } from "src/app/entities/AI/ML/LoggerInfo/MLLoggerInfo";
import { MLRuleTypeLookup } from "src/app/entities/AI/ML/Lookups/MLRuleTypeLookup";

@Entity()
export class MLRule extends BaseEntity {


  @Column('ruleName')
  ruleName: string;

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

  @OneToMany(() => MLLoggerInfo, logger => logger.id)
  logger: MLLoggerInfo[];

  @ManyToOne(() => MLRuleTypeLookup, type => type.id)
  @JoinColumn()
  types: MLRuleTypeLookup;
}
