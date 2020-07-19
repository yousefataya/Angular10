import { Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RuleByFormsInfo } from 'src/app/entities/Validation/RuleInfo/RuleByFormsInfo';
import { RuleValidateTypeLookup  } from 'src/app/entities/Validation/Lookups/RuleValidateTypeLookup';


@Entity()
export class RuleMainInfo extends BaseEntity {

  @Column('ruleHash')
  transactionSerial: string;

  @Column('expireDate')
  expireDate: boolean;

  @Column('ruleName')
  ruleName: string;

  @Column('ruleKey')
  ruleKKey: string;

  @Column('status')
  status: boolean;

  @Column('failed')
  failed: boolean;

  @Column('success')
  success: boolean;

  @Column('date')
  ruleValue: boolean;

  @Column('max')
  max: number;

  @Column('min')
  min: number;

  @Column('email')
  email: boolean;

  @Column('digits')
  digits: boolean;

  @Column('notDigits')
  notDigits: boolean;

  @Column('requiredValue')
  required: boolean;

  @Column('onSubmit')
  onSubmit: boolean;

  @Column('onChange')
  onChange: boolean;

  @Column('CreditCard')
  creditCard: boolean;

  @Column('SupportAjax')
  SupportAjax: boolean;

  @Column('timespan')
  timeSpan: boolean;

  @Column('OnlyTime')
  onlyTime: boolean;

  @Column('OnlyDate')
  onlyDate: boolean;

  @Column('checkBox')
  checkBox: boolean;

  @Column('radioButton')
  radioButton: boolean;

  @OneToMany(() => RuleByFormsInfo, form => form.id)
  forms: RuleByFormsInfo[];

  @ManyToOne(() => RuleValidateTypeLookup, validator => validator.id)
  @JoinColumn()
  validateForm: RuleValidateTypeLookup;

}
