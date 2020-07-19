import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class MQSetting extends BaseEntity {


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

  @Column('defaultMQ')
  defaultMQ: string;

  @Column('maxThread')
  maxThread: number;

  @Column('jdbcExecute')
  jdbcExecute: boolean;

  @Column('XADataSource')
  isXADataSource: boolean;

  @Column('databaseType')
  databaseType: string;

  @Column('databasePort')
  databasePort: number;

  @Column('databaseUsername')
  databaseUsername: string;

  @Column('databasePassword')
  databasePassword: string;

  @Column('databaseProps')
  databaseProps: string;
}
