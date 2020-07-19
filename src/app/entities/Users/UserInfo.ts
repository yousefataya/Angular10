import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { UserTypeLookup } from 'src/app/entities/Users/Lookups/UserTypeLookup';


@Entity()
export class UserInfo extends BaseEntity {

  @Column('userHash')
  userHash: string;

  @Column('userName')
  userName: string;

  @Column('status')
  status: boolean;

  @Column('blocked')
  failed: boolean;

  @Column('deleted')
  deleted: boolean;

  @Column('password')
  password: string;

  @Column('lastLoggedIn')
  lastLoggedIn: Date;

  @Column('firstName')
  firstName: string;

  @Column('secondName')
  secondName: string;

  @Column('lastName')
  lastName: string;

  @Column('gender')
  gender: string;

  @Column('age')
  age: number;

  @ManyToOne(() => UserTypeLookup, type => type.id)
  @JoinColumn()
  type: UserTypeLookup;

}
