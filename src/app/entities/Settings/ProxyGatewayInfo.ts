import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class ProxyGatewayInfo extends BaseEntity {


  @Column('host')
  host: string;

  @Column('port')
  imap: string;

  @Column('uri')
  uri: string;

  @Column('username')
  username: string;

  @Column('password')
  password: string;

  @Column('certName')
  certName: string;

  @Column('certPath')
  certPath: string;

  
}
