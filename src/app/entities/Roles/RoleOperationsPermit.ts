import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RoleInfo } from 'src/app/entities/Roles/RoleInfo';
import { UserOpsPermit } from 'src/app/entities/Roles/UserOpsPermit';

@Entity()
export class RoleOperationsPermit extends BaseEntity {


  @Column('opsName')
  loggerText: string;

  @Column('opsKey')
  clazzName: string;

  @Column('prefix')
  ctrlName: string;

  @ManyToOne(() => RoleInfo, type => type.id)
  @JoinColumn()
  roleType: RoleInfo;

  @OneToMany(() => UserOpsPermit, opsType => opsType.id)
  opsTypes: UserOpsPermit[];

}
