import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { FormValidateRequest } from 'src/app/entities/AI/DataScience/FormValidateRequest'
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MainLogger } from 'src/app/entities/Logger/MainInfo/MainLogger';

@Entity()
export class LoggerInfo extends BaseEntity {


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

  @ManyToOne(() => FormValidateRequest, validate => validate.id)
  @JoinColumn()
  formValidateRequest: FormValidateRequest;


  @OneToMany(() => MainLogger, mainLogger => mainLogger.id)
  mainLogger: MainLogger[];
}
