import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class SolrSettings extends BaseEntity {


  @Column('Uri')
  Uri: string;

  @Column('path')
  envSettings: string;

  @Column('collection')
  folderName: string;

  @Column('collectionSignature')
  folderSignature: string;

  @Column('hitsFrequency')
  hitsFrequency: number;

  @Column('rejectSignature')
  rejectSignature: string;

}
