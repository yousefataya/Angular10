import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { HttpMainLogger } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';
import { RequiredJwtInfo } from 'src/app/entities/Settings/RequiredJwtInfo';
@Entity()
export class ResponseSucessInfo extends BaseEntity {

  @Column('responseSuccess')
  requestSuccess: boolean;

  @Column('successCode')
  successCode: string;


  @ManyToOne(() => HttpMainLogger, httpLogger => httpLogger.id)
  @JoinColumn()
  httpLogger: HttpMainLogger;

  @OneToMany(() => RequiredJwtInfo, jwt => jwt.id)
  jwts: RequiredJwtInfo[];

}
