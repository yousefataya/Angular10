import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { TokenMainInfo } from 'src/app/entities/Tokens/TokenInfo/TokenMainInfo';


@Entity()
export class TokenTypeLookup extends BaseEntity {


  @Column('tokenType')
  tokenType: string;

  @Column('tokenKey')
  tokenKey: string;

  @Column('description')
  description: string;

  @OneToMany(() => TokenMainInfo, token => token.id)
  tokens: TokenMainInfo[];

}
