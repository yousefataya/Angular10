import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { HttpMainLogger } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';
import { RequiredJwtInfo } from 'src/app/entities/Settings/RequiredJwtInfo';

@Entity()
export class ResponseFailInfo extends BaseEntity {

  @Column('responseSuccess')
  requestSuccess: boolean;

  @Column('responseFail')
  requestFail: boolean;

  @Column('failReason')
  failReason: string;

  @Column('successCode')
  successCode: string;

  @Column('errorCode')
  errorCode: string;

  @ManyToOne(() => HttpMainLogger, httpLogger => httpLogger.id)
  @JoinColumn()
  httpLogger: HttpMainLogger;


  @OneToMany(() => RequiredJwtInfo, jwt => jwt.id)
  jwts: RequiredJwtInfo[];

}
