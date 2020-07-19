import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { TokenMainInfo } from 'src/app/entities/Tokens/TokenInfo/TokenMainInfo';
import { UserOpsPermit } from 'src/app/entities/Roles/UserOpsPermit';
import { FormValidateRequest } from 'src/app/entities/AI/DataScience/FormValidateRequest';
import { SessionAttrInfo } from 'src/app/entities/CacheManager/SessionAttrInfo';

@Entity()
export class TokenOperationInfo extends BaseEntity {


  @ManyToOne(() => TokenMainInfo, token => token.id)
  @JoinColumn()
  tokens: TokenMainInfo;

  @ManyToOne(() => UserOpsPermit, ops => ops.id)
  @JoinColumn()
  opsUser: UserOpsPermit;

  @Column('expired')
  expired: boolean;

  @ManyToOne(() => FormValidateRequest, validate => validate.id)
  @JoinColumn()
  validate: FormValidateRequest;

  @ManyToOne(() => SessionAttrInfo, session => session.id)
  @JoinColumn()
  session: SessionAttrInfo;


}
