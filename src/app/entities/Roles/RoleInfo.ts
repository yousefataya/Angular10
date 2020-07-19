import { Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RoleOperationsPermit } from 'src/app/entities/Roles/RoleOperationsPermit';
import { RoleTypeLookup } from 'src/app/entities/Roles/RoleTypeLookup';

@Entity()
export class RoleInfo extends BaseEntity {


  @Column('rlName')
  loggerText: string;

  @Column('keyRole')
  clazzName: string;

  @Column('prefix')
  ctrlName: string;

  @OneToMany(() => RoleOperationsPermit, type => type.id)
  opsType: RoleOperationsPermit[];

  @ManyToOne(() => RoleTypeLookup, roleType => roleType.id)
  @JoinColumn()
  roleType: RoleTypeLookup;

}
