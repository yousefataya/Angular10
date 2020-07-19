import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MLRule } from "src/app/entities/AI/ML/MLRule";


@Entity()
export class MLRuleTypeLookup extends BaseEntity {


  @Column('mlRuleLoggerType')
  mlRuleLoggerType: string;

  @Column('ruleLoggerKey')
  ruleKey: string;

  @Column('ruleLoggerValue')
  ruleValue: string;

  @OneToMany(() => MLRule, logger => logger.id)
  logger: MLRule[];

}
