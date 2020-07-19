import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class ImageSignatureInfo extends BaseEntity {


  @Column('Uri')
  Uri: string;

  @Column('path')
  envSettings: string;

  @Column('imageName')
  folderName: string;

  @Column('imageSignature')
  folderSignature: string;

  @Column('hitsFrequency')
  hitsFrequency: number;

  @Column('rejectSignature')
  rejectSignature: string;

}
