import { Column, Entity } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";


@Entity()
export class PdfSignatureInfo extends BaseEntity {


  @Column('Uri')
  Uri: string;

  @Column('path')
  envSettings: string;

  @Column('pdfName')
  folderName: string;

  @Column('pdfSignature')
  folderSignature: string;

  @Column('hitsFrequency')
  hitsFrequency: number;

  @Column('rejectSignature')
  rejectSignature: string;

}
