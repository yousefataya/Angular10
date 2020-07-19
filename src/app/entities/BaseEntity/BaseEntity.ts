import { PrimaryColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Column, JoinColumn, OneToOne, } from "typeorm";
import { UserInfo } from 'src/app/entities/Users/UserInfo';

export class BaseEntity {

  @PrimaryColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({ type: 'timestamp', name: 'create_date', default: () => 'LOCALTIMESTAMP' })
  createDate: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'update_date', default: () => 'LOCALTIMESTAMP' })
  updateDate: string;

  @VersionColumn({ name: 'data_version' })
  dataVersion: number;

  @Column('lang') 
  lang: string;

  @Column('description')
  description: string;

  @Column('notes')
  notes: string;

  @OneToOne(() => UserInfo, user => user.id)
  @JoinColumn()
  user: UserInfo;

}
