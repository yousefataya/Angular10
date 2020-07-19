import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { UserOpsPermit } from 'src/app/entities/Roles/UserOpsPermit';
import { RequiredJwtInfo } from 'src/app/entities/Settings/RequiredJwtInfo';
import { RequiredLoggerInInfo} from 'src/app/entities/Settings/RequiredLoggerInInfo';

@Entity()
export class InterceptorInfo extends BaseEntity {


  @Column('Uri')
  Uri: string;

  @Column('ctrlName')
  ctrlName: string;

  @Column('specialPremit')
  specialPremit: boolean;


  @ManyToOne(() => RequiredJwtInfo, jwt => jwt.id)
  @JoinColumn()
  jwt: RequiredJwtInfo;

  @ManyToOne(() => UserOpsPermit, userPermit => userPermit.id)
  @JoinColumn()
  userPermit: UserOpsPermit;

  @ManyToOne(() => RequiredLoggerInInfo, loggedin => loggedin.id)
  @JoinColumn()
  loggedin: RequiredLoggerInInfo;

}
