import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { UserInfo } from 'src/app/entities/Users/UserInfo';


@Entity()
export class UserTypeLookup extends BaseEntity {


  @Column('userType')
  transactionType: string;


  @OneToMany(() => UserInfo, user => user.id)
  users: UserInfo[];

}
