import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { RoleInfo } from 'src/app/entities/Roles/RoleInfo';


@Entity()
export class RoleTypeLookup extends BaseEntity {


  @Column('rlType')
  loggerText: string;

  @Column('rlDescription')
  clazzName: string;

  @OneToMany(() => RoleInfo, role => role.id)
  roles: RoleInfo[];

 

}
