import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class HadoopSetting extends BaseEntity {


  @Column('Uri')
  Uri: string;

  @Column('path')
  envSettings: string;

  @Column('folderName')
  folderName: string;

  @Column('folderSignature')
  folderSignature: string;

  @Column('hitsFrequency')
  hitsFrequency: number;

  @Column('rejectSignature')
  rejectSignature: string;

}
