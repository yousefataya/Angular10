import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RoleOperationsPermit } from 'src/app/entities/Roles/RoleOperationsPermit';
import { InterceptorInfo } from 'src/app/entities/Settings/InterceptorInfo';

@Entity()
export class UserOpsPermit extends BaseEntity {


  @Column('READOPS')
  readops: boolean;

  @Column('WRITEOPS')
  writeops: string;

  @Column('VIEWOPS')
  viewops: string;

  @ManyToOne(() => RoleOperationsPermit, opsPermit => opsPermit.id)
  @JoinColumn()
  opsTypes: RoleOperationsPermit;

  @OneToMany(() => InterceptorInfo, interceptor => interceptor.id)
  interceptors: InterceptorInfo[];

}
