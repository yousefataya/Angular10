import { Column, Entity,  OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";



@Entity()
export class MainMenuItem extends BaseEntity {


  @Column('itemName')
  loggerText: string;

  @Column('itemIcon')
  clazzName: string;

  @Column('itemUrl')
  ctrlName: string;

  @OneToOne(() => MainMenuItem, menu => menu.id)
  @JoinColumn()
  item: MainMenuItem;


}
