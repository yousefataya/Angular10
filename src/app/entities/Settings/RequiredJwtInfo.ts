import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RequestSucessInfo } from 'src/app/entities/Settings/RequestSucessInfo';
import { RequestFailInfo } from 'src/app/entities/Settings/RequestFailInfo';
import { InterceptorInfo } from 'src/app/entities/Settings/InterceptorInfo';
import { ResponseFailInfo } from 'src/app/entities/Settings/ResponseFailInfo';
import { ResponseSucessInfo } from 'src/app/entities/Settings/ResponseSucessInfo';
import { TokenMainInfo } from 'src/app/entities/Tokens/TokenInfo/TokenMainInfo';

@Entity()
export class RequiredJwtInfo extends BaseEntity {

  

  @Column('failed')
  failed: boolean;

  @Column('success')
  success: boolean;

  @Column('failReason')
  failReason: string;

  @ManyToOne(() => TokenMainInfo, token => token.id)
  @JoinColumn()
  token: TokenMainInfo;

  @ManyToOne(() => ResponseFailInfo, httpLogger => httpLogger.id)
  @JoinColumn()
  responseFail: ResponseFailInfo;

  @ManyToOne(() => ResponseSucessInfo, httpLogger => httpLogger.id)
  @JoinColumn()
  responseSuccess: ResponseSucessInfo;

  @ManyToOne(() => RequestFailInfo, httpLogger => httpLogger.id)
  @JoinColumn()
  failLogger: RequestFailInfo;

  @ManyToOne(() => RequestSucessInfo, httpLogger => httpLogger.id)
  @JoinColumn()
  successLogger: RequestSucessInfo;

  @OneToMany(() => InterceptorInfo, interceptor => interceptor.id)
  interceptor: InterceptorInfo[];

}
