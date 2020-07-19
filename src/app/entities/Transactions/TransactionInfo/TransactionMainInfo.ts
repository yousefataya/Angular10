import { Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "src/app/entities/BaseEntity/BaseEntity";
import { HttpMainLogger } from 'src/app/entities/Management/APM/HttpLogger/HttpMainLogger';
import { TransactionLookup } from 'src/app/entities/Transactions/Lookups/TransactionLookup';

@Entity()
export class TransactionMainInfo extends BaseEntity {

  @Column('transactionSerial')
  transactionSerial: string;

  @Column('expireDate')
  expireDate: boolean;

  @Column('status')
  status: boolean;

  @Column('failed')
  failed: boolean;

  @Column('success')
  success: boolean;

  @OneToMany(() => HttpMainLogger, httpLogger => httpLogger.id)
  lhttpLoggers: HttpMainLogger[];

  @ManyToOne(() => TransactionLookup, lookup => lookup.id)
  @JoinColumn()
  transactionLkp: TransactionLookup;

}
