import { Column, Entity, ManyToOne, JoinColumn} from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RuleMainInfo } from 'src/app/entities/Validation/RuleInfo/RuleMainInfo';

@Entity()
export class RuleByFormsInfo extends BaseEntity {

  @Column('formName')
  formName: string;

  @Column('formHash')
  formHash: string;

  @Column('formCtrl')
  formCtrl: string;

  @ManyToOne(() => RuleMainInfo, rule => rule.id)
  @JoinColumn()
  rule: RuleMainInfo;
}
