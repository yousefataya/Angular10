import { Column, Entity, OneToOne, JoinColumn,  } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { MainMenuItem} from 'src/app/entities/Menu/Items/MainMenuItem';


@Entity()
export class ItemInterceptor extends BaseEntity {


  @Column('acceptMethod')
  acceptMethod: string;

  @Column('acceptSignature')
  acceptSignature: string;

  @Column('rejectSignature')
  rejectSignature: string;

  @Column('rejectJWT')
  rejectJWT: string;


  @Column('acceptJWT')
  acceptJWT: string;


  @OneToOne(() => MainMenuItem, menu => menu.id)
  @JoinColumn()
  item: MainMenuItem;


}
