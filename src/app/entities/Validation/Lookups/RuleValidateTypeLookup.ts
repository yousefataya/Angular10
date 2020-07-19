import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RuleMainInfo } from 'src/app/entities/Validation/RuleInfo/RuleMainInfo';


@Entity()
export class RuleValidateTypeLookup extends BaseEntity {


  @Column('ruleType')
  transactionType: string;


  @OneToMany(() => RuleMainInfo, rule => rule.id)
  users: RuleMainInfo[];

}
