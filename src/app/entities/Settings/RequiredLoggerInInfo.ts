import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RequiredJwtInfo } from 'src/app/entities/Settings/RequiredJwtInfo';
import { InterceptorInfo } from 'src/app/entities/Settings/InterceptorInfo';
import { TokenMainInfo } from 'src/app/entities/Tokens/TokenInfo/TokenMainInfo';

@Entity()
export class RequiredLoggerInInfo extends BaseEntity {

  @Column('loggedIn')
  loggedin: boolean;

  @Column('failAttempt')
  failAttempt: Date;

  @Column('success')
  success: boolean;

  @Column('failReason')
  failReason: string;

  @ManyToOne(() => TokenMainInfo, token => token.id)
  @JoinColumn()
  token: TokenMainInfo;


  @ManyToOne(() => RequiredJwtInfo, httpLogger => httpLogger.id)
  @JoinColumn()
  failLogger: RequiredJwtInfo;

  @OneToMany(() => InterceptorInfo, interceptor => interceptor.id)
  interceptors: InterceptorInfo[];

}
