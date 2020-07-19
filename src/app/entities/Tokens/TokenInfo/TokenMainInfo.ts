import { Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RequiredJwtInfo } from 'src/app/entities/Settings/RequiredJwtInfo';
import { RequiredLoggerInInfo } from 'src/app/entities/Settings/RequiredLoggerInInfo';
import { TokenTypeLookup } from 'src/app/entities/Tokens/Types/TokenTypeLookup';
@Entity()
export class TokenMainInfo extends BaseEntity {

  @Column('jwtToken')
  jwtToken: string;

  @Column('expireDate')
  expireDate: boolean;

  @Column('jwtSignature')
  jwtSignature: string;

  @Column('tokenLevel')
  tokenLevel: number;

  @Column('tokenPreviledge')
  tokenPreviledge: string;

  @OneToMany(() => RequiredJwtInfo, jwt => jwt.id)
  jwts: RequiredJwtInfo[];

  @OneToMany(() => RequiredLoggerInInfo, jwt => jwt.id)
  loggedIn: RequiredLoggerInInfo[];

  @ManyToOne(() => TokenTypeLookup, type => type.id)
  @JoinColumn()
  type: TokenTypeLookup;
}
