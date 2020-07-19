import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class MailSetting extends BaseEntity {


  @Column('host')
  ipAddress: string;

  @Column('imap')
  imap: string;

  @Column('imapPort')
  imapPort: number;


  @Column('pop3')
  pop3: string;

  @Column('pop3Port')
  pop3Port: number;

  @Column('inboxFolder')
  inboxFolder: string;

  @Column('trashFolder')
  trashFolder: string;

 
}
